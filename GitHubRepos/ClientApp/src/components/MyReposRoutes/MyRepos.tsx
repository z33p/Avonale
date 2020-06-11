import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MyReposContext } from "./MyReposRoutes";
import ReposTable from "../helpers/ReposTable";
import { apiGitHub, appRoutes } from "../../contracts/routes";
import { GitHubResponse } from "../../contracts/responses";
import Paginator from "../helpers/Paginator";
import { useHistory, RouteComponentProps } from "react-router-dom";

interface Params {
  page: string;
  per_page: string;
}

const MyRepos: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    parseInt(match.params.page ?? 1)
  );
  const { responseData, setResponseData } = useContext(MyReposContext);

  const per_page = parseInt(match.params.per_page ?? 12);

  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    history.replace(appRoutes.myRepos.pagination.set(currentPage, per_page));
    axios
      .get<GitHubResponse>(apiGitHub.userRepos("z33p", currentPage, per_page))
      .then((res) => {
        setResponseData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [currentPage, history, per_page, setResponseData]);

  return (
    <div>
      <h1 id="tabelLabel">Meus repositórios</h1>
      <p>This component demonstrates fetching data from the server.</p>
      <Paginator
        per_page={per_page}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total_count={responseData.total_count}
      />
      <ReposTable repos={responseData.items} isLoading={isLoading} />
    </div>
  );
};

export default MyRepos;
