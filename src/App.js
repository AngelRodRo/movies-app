import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './layout';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
