import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { appRoutes } from "../../contracts/routes";
import { Route, Switch } from "react-router";
import MyRepos from "./MyRepos";
import ShowRepo from "./ShowRepo/ShowRepo";
import { GitHubResponse } from "../../contracts/responses";

interface MyReposContext {
  responseData: GitHubResponse;
  setResponseData: Dispatch<SetStateAction<GitHubResponse>>;
}

export const MyReposContext = createContext<MyReposContext>({
  responseData: {
    total_count: 0,
    items: [],
  },
  setResponseData: () => null,
});

const MyReposRoutes: React.FC = () => {
  const [responseData, setResponseData] = useState<GitHubResponse>({
    total_count: 0,
    items: [],
  });

  return (
    <Switch>
      <MyReposContext.Provider value={{ responseData, setResponseData }}>
        <Route exact path={appRoutes.myRepos.index} component={MyRepos} />
        <Route
          exact
          path={appRoutes.myRepos.show.template}
          component={ShowRepo}
        />
      </MyReposContext.Provider>
    </Switch>
  );
};

export default MyReposRoutes;
