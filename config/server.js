module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  server: {
    autoReload: false,
  },
  middleware: {
    cache: {
      enabled: true,
      expose: {
        enabled: true,
        headers: {
          'cache-control': 'public, max-age=2592000, immutable',
        },
      },
    },
  },
});
