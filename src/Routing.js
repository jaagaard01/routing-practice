import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'


const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Switch>
    </Router>
  );


export default Routing; 