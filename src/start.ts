// import 'dotenv/config';
if(process.env.NODE_ENV=='development') {
    require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` })
}else{
    require('dotenv').config({ path: `./.env` })
}
console.log(process.env.HASURA_GRAPHQL_GRAPHQL_URL)

import { start } from './server';

start();
