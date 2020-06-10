import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';

import './custom.css'
import FetchData from './components/FetchData';

const App: React.FC = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data" component={FetchData} />
    </Layout>
  );
}

export default App;
