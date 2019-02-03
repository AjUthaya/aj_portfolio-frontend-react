// EXPORT: Function
module.exports = (function() {
  // ### Fillout this section ###
  const sentryKey = "SENTRY_KEY",
    sentryApp = "SENTRY_PROJECT_ID",
    // Base url for backend
    apiBase = "https://www.admin.aj-portfolio.com",
    // Login for WordPress
    apiUsername = "WORDPRESS_USERNAME",
    apiPassword = "WORDPRESS_PASSWORD";
  // ### Fillout this section ###

  // API
  const apiDataPath = "/wp-json/wp/v2",
    apiDataBase = apiBase + apiDataPath,
    apiAuthPath = "/wp-json/jwt-auth/v1",
    apiAuthBase = apiBase + apiAuthPath;

  const perPage = "per_page=100",
    orderBy = "filter[orderby]=post_title",
    order = "order=asc";

  // RETURN: Object
  return {
    sentry: {
      key: sentryKey,
      app: sentryApp,
      url: `https://${sentryKey}@app.getsentry.com/${sentryApp}`
    },
    portfolio: {
      projectIcon: `${apiBase}/wp-content/uploads/site/logo.png`,
      projectTitle: "Personal",
      noLogo: `${apiBase}/wp-content/uploads/site/no-picture.png`
    },
    api: {
      username: apiUsername,
      password: apiPassword,
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
        resume: `${apiDataBase}/experiences?${perPage}`,
        skills: `${apiDataBase}/skills?${perPage}&${orderBy}&${order}`,
        projects: `${apiDataBase}/projects?${perPage}`,
        categories: `${apiDataBase}/categories?${perPage}&${orderBy}&${order}`
      }
    }
  };
})();
