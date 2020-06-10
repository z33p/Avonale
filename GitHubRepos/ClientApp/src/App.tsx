import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import FavRepos from './components/FavRepos';

import './custom.css'
import { appRoutes } from './contracts/routes';
import MyReposRoutes from './components/MyReposRoutes/MyReposRoutes';

const App: React.FC = () => {
  return (
    <Layout>
      <Route exact path={appRoutes.home} component={Home} />
      <Route path={appRoutes.favRepos} component={FavRepos} />
      <Route path={appRoutes.myRepos.index} component={MyReposRoutes} />
    </Layout>
  );
}

export default App;
