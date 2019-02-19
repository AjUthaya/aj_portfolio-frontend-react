// ##### Fillout this section ##### //

// Sentry
const sentryKey = "SENTRY_KEY",
  sentryApp = "SENTRY_APP";

// Backend API
const apiBase = "https://www.admin.aj-portfolio.com";

// Goggle Analytics
const gaId = "";

// HotJar
const hotjarId = "",
  hotjarVersion = "";

// ##### Fillout this section ##### //

// EXPORT: Function
module.exports = (function() {
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
    ga: {
      id: gaId
    },
    hotjar: {
      id: hotjarId,
      version: hotjarVersion
    },
    sentry: {
      id: sentryKey,
      app: sentryApp,
      url: `https://${sentryKey}@app.getsentry.com/${sentryApp}`
    },
    portfolio: {
      projectIcon: `${apiBase}/wp-content/uploads/site/logo.png`,
      projectTitle: "Personal",
      noLogo: `${apiBase}/wp-content/uploads/site/no-picture.png`
    },
    api: {
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
