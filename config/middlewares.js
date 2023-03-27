
module.exports = [
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ["https://server-side-3aru.onrender.com", "https://e-shop-uxvp.onrender.com"],
      expose: ["WWW-Authenticate", "Server-Authorization"],
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "CREATE", "OPTIONS", "PATCH"],
      headers: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "Access-Control-Allow-Origin",
      ],
       // Check middlewares accessibility
      onInit: () => console.log('Strapi CORS middleware initialized'), 
    },
  },
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];



