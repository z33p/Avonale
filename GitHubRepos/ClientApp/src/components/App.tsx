import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import FavRepos from './FavRepos';
import { appRoutes } from '../contracts/routes';
import MyReposRoutes from './MyReposRoutes/MyReposRoutes';
import SearchRepos from './SearchRepos';

import '../custom.css'

const App: React.FC = () => {
  return (
    <Layout>
      <Route exact path={appRoutes.home} component={Home} />
      <Route path={appRoutes.favRepos} component={FavRepos} />
      <Route path={appRoutes.searchRepos} component={SearchRepos} />
      <Route path={appRoutes.myRepos.index} component={MyReposRoutes} />
    </Layout>
  );
}

export default App;
