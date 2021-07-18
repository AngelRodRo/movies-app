import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './layout';
import Home from './views/Home';
import Search from './views/Search';

function App() {
  return (
    <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </Router>
    </Layout>
  );
};

export default App;
