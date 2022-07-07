import { RequestHandler } from 'express';
// import { v4 as uuidv4 } from 'uuid';

import { ReasonPhrases } from 'http-status-codes';

import {
  getGravatarUrl,
  hashPassword,
  getUserByEmail,
  insertUser,
  gqlSdk,
  //   ENV,
} from '@/utils';
import { UserRegistrationOptions } from '@/types';
import { sendError } from '@/errors';
import {
  Joi,
  email,
  passwordInsert,
  password,
  registrationOptions,
} from '@/validation';

export const addUserSchema = Joi.object({
  email: email.required(),
  password: passwordInsert.required(),
  options: registrationOptions,
  branchId: Joi.string(),
  disabled: Joi.boolean(),
  emailVerified: Joi.boolean(),
}).meta({ className: 'addUserSchema' });

const BASE_ROLES = ['admin', 'sme', 'bank'];

export const userAdd: RequestHandler<
  {},
  {},
  {
    email: string;
    password: string;
    branchId: string;
    disabled: boolean;
    options: UserRegistrationOptions & {
      redirectTo: string;
    };
  }
> = async (req, res) => {
  const { body } = req;
  const {
    email,
    password,
    branchId,
    disabled,
    options: {
      locale,
      defaultRole,
      allowedRoles,
      metadata,
      displayName = email,
    },
  } = body;

  // check role
  //   if (!req.auth?.userId) {
  //     return sendError(res, 'unauthenticated-user');
  //   }

  const role = req?.auth?.defaultRole || '';
  const hasRole = BASE_ROLES.includes(role);
  if (!hasRole) {
    return sendError(res, 'invalid-request');
  }

  // check if email already in use by some other user
  if (await getUserByEmail(email)) {
    return sendError(res, 'email-already-in-use');
  }

  // hash password
  const passwordHash = await hashPassword(password);

  // insert user
  const user = await insertUser({
    disabled: disabled,
    displayName,
    avatarUrl: getGravatarUrl(email),
    email,
    passwordHash,
    locale,
    defaultRole,
    bank_branch_id: branchId,
    emailVerified: true,
    roles: {
      // restructure user roles to be inserted in GraphQL mutation
      data: allowedRoles.map((role: string) => ({ role })),
    },
    metadata,
  });

  // SIGNIN_EMAIL_VERIFIED_REQUIRED = true => Must verify email before sign in
  // SIGNIN_EMAIL_VERIFIED_REQUIRED = true => Don't have to verify email before
  // sign in

  return res.send({ session: user, mfa: null });
};

export const userPasswordrestSchema = Joi.object({
  newPassword: password.required(),
  userId: Joi.string().required(),
}).meta({ className: 'UserPasswordSchema' });

export const userResetPassword: RequestHandler<
  {},
  {},
  { newPassword: string; userId: string }
> = async (req, res) => {
  // check if user is logged in

  const { newPassword, userId } = req.body;

  const role = req?.auth?.defaultRole || '';
  const hasRole = BASE_ROLES.includes(role);
  if (!hasRole) {
    return sendError(res, 'invalid-request');
  }

  if (!userId) {
    return sendError(res, 'unauthenticated-user');
  }

  const newPasswordHash = await hashPassword(newPassword);

  const { user } = await gqlSdk.user({
    id: userId,
  });

  if (!user) {
    throw new Error('Unable to get user');
  }

  // set new password for user
  await gqlSdk.updateUser({
    id: userId,
    user: {
      passwordHash: newPasswordHash,
    },
  });

  return res.send(ReasonPhrases.OK);
};
