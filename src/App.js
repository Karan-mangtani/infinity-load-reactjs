import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/layout';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout />
      </BrowserRouter >
    );
  }
}

export default App;
