// IMPORT: React
import React from "react";
import ReactDOM from "react-dom";

// IMPORT: Redux
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// IMPORT: Raven for sentry
import Raven from "raven-js";

// IMPORT: Authentication
//import Auth from "./auth/index";
// IMPORT: Config
import Config from "./local";
// IMPORT: Service worker
import * as serviceWorker from "./serviceWorker";
// IMPORT: Reducers
import reducers from "./reducers/index";
// IMPORT: Application
import App from "./views/app";

// 1. DEFINE: Authentication middleware
const authMiddleware = store => next => async action => {
  if (action.type != null) {
    //await Auth();
  }
  next(action);
};

// 2. DEFINE: Variable to store sentry config data
const sentryConfig = Config.sentry;

// 3. DEFINE: Conditions that validate the sentry config
const sentryConfigValid =
  (sentryConfig.app !== "") &
    (sentryConfig.key !== "") &
    (sentryConfig.url !== "") &&
  (sentryConfig.app !== undefined) &
    (sentryConfig.key !== undefined) &
    (sentryConfig.url !== undefined);

// 4. IF: Sentry config variable is true
if (sentryConfigValid) {
  // A. CALL: Init sentry
  Raven.config(Config.sentry.url, {
    environment: process.env.NODE_ENV,
    sampleRate: 1
  }).install();
}

// 5. DEFINE: Redux store
const Store = createStore(
  reducers,
  compose(
    // DEV: Remove logger from applyMiddleware, before PROD
    applyMiddleware(authMiddleware, thunk),
    // DEV: Remove line that enables redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

// 6. Render application
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 7. Register service worker
serviceWorker.register();
