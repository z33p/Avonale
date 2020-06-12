import React from "react";
import { Route } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import FavRepos from "./FavRepos";
import { appRoutes } from "../contracts/routes";
import MyReposRoutes from "./MyReposRoutes/MyReposRoutes";
import SearchRepos from "./SearchRepos";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "../custom.css";

// optional configuration
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 3500,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const App: React.FC = () => {
  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Layout>
        <Route exact path={appRoutes.home} component={Home} />
        <Route path={appRoutes.favRepos} component={FavRepos} />
        <Route path={appRoutes.searchRepos.index} component={SearchRepos} />
        <Route path={appRoutes.myRepos.index} component={MyReposRoutes} />
      </Layout>
    </AlertProvider>
  );
};

export default App;
