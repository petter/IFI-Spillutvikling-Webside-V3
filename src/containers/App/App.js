import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
