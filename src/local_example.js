// EXPORT: Function
module.exports = (function() {
  // SENTRY
  const sentryKey = "ENTER_YOUR_SENTRY_KEY",
    sentryApp = "ENTER_YOUR_SENTRY_APP_ID";

  // API
  const apiBase = "ENTER_YOUR_API_BASE_URL",
    apiDataPath = "/wp-json/wp/v2",
    apiDataBase = apiBase + apiDataPath,
    apiAuthPath = "/wp-json/jwt-auth/v1",
    apiAuthBase = apiBase + apiAuthPath;

  // RETURN: Object
  return {
    portfolio: {
      projectIcon: `${apiBase}/wp-content/uploads/site/logo.png`,
      projectTitle: "Personal",
      noLogo: `${apiBase}/wp-content/uploads/site/no-picture.png`
    },
    sentry: {
      key: sentryKey,
      app: sentryApp,
      url: `https://${sentryKey}@app.getsentry.com/${sentryApp}`
    },
    api: {
      username: "ENTER_YOUR_WORDPRESS_USERNAME",
      password: "ENTER_YOUR_WORDPRESS_PASSWORD",
      base: apiBase,
      path: apiDataBase,
      auth: apiAuthBase,
      serverError: {
        status: 500,
        title: "Internal server error",
        message: "Oops! Something went terribly wrong, please try again later."
      },
      endpoints: {
        generateToken: `${apiAuthBase}/token`,
        validateToken: `${apiAuthBase}/token/validate`,
        resume: `${apiDataBase}/experiences`,
        skills: `${apiDataBase}/skills`,
        projects: `${apiDataBase}/projects`,
        categories: `${apiDataBase}/categories`
      }
    }
  };
})();
