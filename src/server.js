'use strict';

const pjson = require('../package');

const Promise = require('bluebird');
const Hapi = require('hapi');
const path = require('path');

function appStart(opts) {
  return new Promise((resolve, reject) => {
    let server = new Hapi.Server();
    server.connection({
      port: opts.port,
      routes: {
        files: {
          relativeTo: path.resolve(__dirname, '../dist')
        }
      }
    });

    let plugins = [
      require('inert'),
      require('vision'),
      {
        register: require('hapi-and-healthy'),
        options: {
          name: pjson.name,
          version: pjson.version
        }
      }
    ];

    server.register(plugins, err => {
      if (err) return reject(err);

      server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
          directory: {
            path: '.',
            redirectToSlash: true,
            index: true
          }
        }
      });

      resolve(server);
    });
  });
}

if (require.main === module) {
  appStart({
    port: process.env.PORT || 3000
  }).then(server => {
    server.start(() => {
      console.log(`running at ${server.info.uri}`);
    });
  }, err => {
    throw err;
  });
}

module.exports = appStart;
