// IMPORT: React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Helmet } from 'react-helmet';

// IMPORT: Global stylesheet
import "../scss/index.scss";

// IMPORT: Views
import NotFound from "./NotFound/index";
import Home from "./Home/index";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/login" component={Home} />
            <Route exact={true} path="/home" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
