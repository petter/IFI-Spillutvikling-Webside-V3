import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import _404 from '../Pages/404/404';

import './App.css';
import Vedtekter from '../Pages/Vedtekter/Vedtekter';

class App extends Component {
  render() {
    return (

      <Switch>
        <Route path="/404" exact component={_404} />
        <Route render={() => (
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/vedtekter" exact component={Vedtekter} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </Layout>
        )} />
      </Switch>
    );
  }
}

export default App;
