import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import MyRepos from './components/MyRepos/MyRepos';

import './custom.css'
import { appRoutes } from './contracts/routes';

const App: React.FC = () => {
  return (
    <Layout>
      <Route exact path={appRoutes.home} component={Home} />
      <Route path={appRoutes.counter} component={Counter} />
      <Route path={appRoutes.myRepos.index} component={MyRepos} />
    </Layout>
  );
}

export default App;
