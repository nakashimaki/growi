/** **********************************************************
 *                           Caution
 *
 * Module aliases by compilerOptions.paths in tsconfig.json
 * are NOT available in setup scripts
 *********************************************************** */

import 'tsconfig-paths/register';

import mongoose from 'mongoose';

import { initMongooseGlobalSettings, getMongoUriForTestV4, mongoOptions } from '@growi/core';

// check env
if (process.env.NODE_ENV !== 'test') {
  throw new Error('\'process.env.NODE_ENV\' must be \'test\'');
}

module.exports = async() => {
  initMongooseGlobalSettings();

  mongoose.connect(getMongoUriForTestV4(), mongoOptions);

  // drop database
  await mongoose.connection.dropDatabase();

  // init DB
  const pageCollection = mongoose.connection.collection('pages');
  const userCollection = mongoose.connection.collection('users');

  // create global user & rootPage
  const globalUser = (await userCollection.insertMany([{ name: 'globalUser', username: 'globalUser', email: 'globalUser@example.com' }]))[0];
  await pageCollection.insertMany([{
    path: '/',
    grant: 1,
    creator: globalUser,
    lastUpdateUser: globalUser,
  }]);

  await mongoose.disconnect();
};
