/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'yard-share',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
// test firebase -- delete when done
    firebase: {
    apiKey: "AIzaSyCWjINFEHbOYZiltwH-zApEH5MB59dac54",
    authDomain: "yardshare-5e6d1.firebaseapp.com",
    databaseURL: "https://yardshare-5e6d1.firebaseio.com",
    storageBucket: "yardshare-5e6d1.appspot.com",
  },

// Dylan and Molly firebase
    // {
    //   apiKey: "AIzaSyC37A9WnZPgKKeARiiepEPYOEPHdGWT4bw",
    //   authDomain: "yard-share.firebaseapp.com",
    //   databaseURL: "https://yard-share.firebaseio.com",
    //   storageBucket: "yard-share.appspot.com",
    // },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
