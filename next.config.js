const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  env: {
    AUTH0_DOMAIN: "tonyjmartinez.auth0.com",
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: "openid profile",
    REDIRECT_URI:
      // process.env.REDIRECT_URI || "http://localhost:3000/api/callback",
      "https://hasura-nextjs-tutorial-4v9purpqz.now.sh/api/callback",
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || "http://localhost:3000/",
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200, // 2 hours
    APP_HOST: process.env.DOMAIN,
  },
};
