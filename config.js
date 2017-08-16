
'use strict';

const nconf = module.exports = require('nconf');
const path = require('path');

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env([
  ])

  .file({ file: path.join(__dirname, 'config.json') })

  .defaults({

    CLOUD_BUCKET: '',

    DATA_BACKEND: 'datastore',


    GCLOUD_PROJECT: '',

    MEMCACHE_URL: 'localhost:11211',

    MONGO_URL: 'mongodb://localhost:27017',
    MONGO_COLLECTION: 'userBase',
    OAUTH2_CLIENT_ID: '',
    OAUTH2_CLIENT_SECRET: '',
    OAUTH2_CALLBACK: 'http://localhost:8080/auth/google/callback',

    // Port the HTTP server
    PORT: 8080,

    SECRET: 'keyboardcat'
  });

if (nconf.get('DATA_BACKEND') === 'cloudsql') {
  checkConfig('MYSQL_USER');
  checkConfig('MYSQL_PASSWORD');
  if (nconf.get('NODE_ENV') === 'production') {
    checkConfig('INSTANCE_CONNECTION_NAME');
  }
}
 else if (nconf.get('DATA_BACKEND') === 'mongodb') {
  checkConfig('MONGO_URL');
  checkConfig('MONGO_COLLECTION');
}

function checkConfig (setting) {
  if (!nconf.get(setting)) {
    throw new Error(`You must set ${setting} as an environment variable or in config.json!`);
  }
}
