import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './layout';
import Home from './views/Home';
import Search from './views/Search';
import Movie from './views/Movie';

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
            <Route path="/movies/:id">
              <Movie />
            </Route>
          </Switch>
        </Router>
    </Layout>
  );
};

export default App;
