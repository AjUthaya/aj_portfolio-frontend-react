// IMPORT: React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Helmet } from 'react-helmet';

// IMPORT: Global stylesheet
import "../scss/index.scss";

// IMPORT: Views
import Home from "./Home/index";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="*" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
