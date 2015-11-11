try {
  require('node-env-file')('./.env'); //should pull env file from root node directory
}
//if env file does not exist, log the exception and maybe even shut down the process (no point if we aren't configured).
catch (exception){
    console.log(exception);
}

//now that all of our env file variables have been put into process.env by name
//we can call process.env.NODE_ENV and get the variable from our file
var env = process.env.NODE_ENV || 'development';
var path = require('path');
var url = require('url');

// var staticAssets = {
//   //asset path for devs
//   development: {
//     path: 'clientDev/'
//   },
//   //asset paths for testing
//   test: {
//     path: 'clientDev/'
//   },
//   //asset paths for staging
//   //Staging environments are a complete mirror of production so that when it goes into production, you know
//   //it has been tested on the exact settings/versions/software/hardware/configuration as the real one
//   staging: {
//     path: 'client/'
//   },
//   //asset paths for production
//   production: {
//     path: 'client/'
//   }

// };

//object for our http config
//again everything is by a common environment key so we can just grab all of the variables for our current environment
var http = {
  //http config vars for dev
  development: {
    port: 3000,
    baseUrl: 'http://localhost:3000'
  },
  //http config vars for test
  test: {
    port: 3000,
    baseUrl: 'http://localhost:3000'
  },
  //http config vars for production
  production: {
    port: process.env.PORT || process.env.NODE_PORT || 3000,
    baseUrl: 'http://appName.herokuapp.com'
  }
};

//object for our mongo or other db config
//again everything is by a common environment key so we can just grab all of the variables for our current environment
var DB = {
  //local database (use a different database for each so you don't pollute your environment with malformed data)
  development: {
    host: 'localhost',
    database: 'interactiveWall'
  },
  //test database (use a different database for each so you don't pollute your environment with malformed data)
  test: {
    host: 'localhost',
    database: 'interactiveWall'
  },
  //production database 
  production: {
    host: undefined, 
    database: undefined
  }
};

//function to help build a proper mongodb protocol string 
var dburl = function() {
  var db = DB[env];
  var auth = (db.username && db.password ? db.username + ':' + db.password + '@' : '');
  var port = (db.port ? ':' + db.port : '');
  return 'mongodb://' + auth + db.host + port + '/' + db.database;
};

//return an appropriate object of your environment
//The keys are all indexed by the current environment, so outside of this file
//all of the config calls only show the ones for the current environment
var get = function() {
  return {
    env: env,
    http: http[env],
    dburl: dburl(env),
    //staticAssets: staticAssets[env],
    //sessions: sessions[env]
  };
};

module.exports = get();