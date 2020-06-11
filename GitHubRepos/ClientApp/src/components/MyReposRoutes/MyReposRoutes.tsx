import React, { createContext } from 'react';
import { appRoutes } from '../../contracts/routes';
import { Route, Switch } from 'react-router';
import MyRepos from './MyRepos/MyRepos';
import ShowRepo from './ShowRepo/ShowRepo';
import { Repository } from '../../contracts/responses';

const myRepos: Repository[] = [];
export const MyReposContext = createContext(myRepos);

const MyReposRoutes: React.FC = () => {
  return (
    <Switch>
      <MyReposContext.Provider value={myRepos}>
        <Route exact path={appRoutes.myRepos.index} component={MyRepos} />
        <Route exact path={appRoutes.myRepos.show.template} component={ShowRepo} />
      </MyReposContext.Provider>
    </Switch>
  );
}

export default MyReposRoutes;