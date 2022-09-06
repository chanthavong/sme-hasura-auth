import { Router } from 'express';
// import { getUser } from '@/utils';
import { authenticationGate } from '@/middleware/auth';

// const sharp = require('sharp');
var multer = require('multer');
const fs = require('fs');

const router = Router();

var storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, 'uploads');
  },
  filename: function (req: any, file: any, cb: any) {
    let typeFile = file.originalname.split('.');
    cb(null, 'image-' + Date.now() + '.' + typeFile.pop());
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Image uploaded is not of type jpg/jpegor png'), false);
  }
};

var uploadImage = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024, // 1MB
  },
  fileFilter: fileFilter,
});

router.post(
  '/upload/image',
  authenticationGate,
  uploadImage.single('image'),

  async (req: any, res: any) => {
    // check token here

    // const user = await getUser({ userId });
    // get user id
    // const { userId } = req.auth as RequestAuth;

    // remove old image
    if (req.body.oldImage) {
      fs.unlinkSync(`uploads/${req.body.oldImage}`);
    }

    // not image file
    if (!req.file) {
      return res.send('Not Image', 400);
    }

    // resize image
    // sharp(req.file.path)
    //   .resize({ height: 300, width: 300 })
    //   .toFile(req.file.path)
    //   .then(function (newFileInfo:any) {
    //     console.log(newFileInfo);
    //     console.log('Success');
    //   })
    //   .catch(function (err:any) {
    //     console.log('Error occured'+ err.toString());
    //   });

    res.send({
      file: req.file,
    });
  }
);

const uploadRouter = router;
export { uploadRouter };
