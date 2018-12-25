// EXPORT: Function
module.exports = (function() {
  // SENTRY
  const sentry_key = "",
    sentry_app = "";

  // API
  const apiBase = "http://127.0.0.1:3000",
    apiDataPath = "/wp-json/wp/v2",
    apiAuthPath = "/wp-json/jwt-auth/v1";

  // RETURN: Object
  return {
    sentry: {
      key: sentry_key,
      app: sentry_app,
      url: `https://${sentry_key}@app.getsentry.com/${sentry_app}`
    },
    api: {
      username: "",
      password: "",
      base: apiBase,
      path: apiBase + apiDataPath,
      auth: apiBase + apiAuthPath,

      endpoints: {
        generateToken: `${apiBase}${apiAuthPath}/token`,
        validateToken: `${apiBase}${apiAuthPath}/token/validate`,
        resume: `${apiBase}${apiDataPath}/experiences`
      }
    }
  };
})();
