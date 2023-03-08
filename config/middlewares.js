module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      headers: '*',
      origin: '*',
      expose: ['WWW-Authenticate', 'Server-Authorization'],
      maxAge: 31536000,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    },
  },
});

