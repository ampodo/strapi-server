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
    acquireConnectionTimeout: 5000,
    pool: {
      min: 0,
      max: 10,
      createTimeoutMillis: 8000,
      acquireTimeoutMillis: 8000,
      idleTimeoutMillis: 8000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100
   }
}
});


  
