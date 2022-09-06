// import 'dotenv/config';
if(process.env.NODE_ENV=='development') {
    require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` })
}else{
    require('dotenv').config({ path: `./.env` })
}

import { start } from './server';

start();
