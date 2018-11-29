// EXPORT: Function
module.exports = (function() {
  // SENTRY
  const sentry_key = "",
    sentry_app = "";

  // RETURN: Object
  return {
    sentry: {
      key: sentry_key,
      app: sentry_app,
      url: `https://${sentry_key}@app.getsentry.com/${sentry_app}`
    }
  };
})();
