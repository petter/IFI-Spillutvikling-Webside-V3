import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
