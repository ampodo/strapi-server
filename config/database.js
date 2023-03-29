module.exports = ({ env }) => ({
   connection: {
     client: 'postgres',
     connection: {
       host: env("DATABASE_HOST"),
       port: env.int("DATABASE_PORT"),
       database: env("DATABASE_NAME"),
       user: env("DATABASE_USERNAME"),
       password: env("DATABASE_PASSWORD"),
       ssl: env.bool("DATABASE_SSL", true),
     },
     debug: false,
     acquireConnectionTimeout: 10000,
     pool: {
       min: 2,
       max: 20,
       createTimeoutMillis: 10000, 
       acquireTimeoutMillis: 10000, 
       idleTimeoutMillis: 60000, 
       reapIntervalMillis: 1000,
       createRetryIntervalMillis: 100
     }
   }
 });
 


  
