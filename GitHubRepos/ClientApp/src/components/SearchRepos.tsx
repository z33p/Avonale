import React, { useState, useEffect, useCallback } from "react";
import { GitHubResponse } from "../contracts/responses";
import axios from "axios";
import ReposTable from "./helpers/ReposTable";
import { Input } from "reactstrap";
import { apiGitHub, appRoutes } from "../contracts/routes";
import Paginator from "./helpers/Paginator";
import { RouteComponentProps, useHistory } from "react-router-dom";

interface Params {
  name: string;
  page: string;
  per_page: string;
}

const SearchRepos: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const [repoName, setRepoName] = useState(match.params.name ?? "");
  const [currentPage, setCurrentPage] = useState(
    parseInt(match.params.page ?? 1)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<GitHubResponse>({
    total_count: 0,
    items: [],
  });

  const history = useHistory();

  const per_page = parseInt(match.params.per_page ?? 12);
  const searchRepos = useCallback(() => {
    setIsLoading(true);
    history.replace(
      appRoutes.searchRepos.pagination.set(repoName, currentPage, per_page)
    );
    axios
      .get<GitHubResponse>(
        apiGitHub.searchByName(repoName, currentPage, per_page)
      )
      .then((res) => {
        setResponseData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [currentPage, history, per_page, repoName]);

  useEffect(() => {
    console.log("constructed");

    if (repoName.length > 0) searchRepos();
  }, [currentPage, repoName.length, searchRepos]);

  let typingTimer: any = null;
  return (
    <div className="p-4">
      <h4 className="pb-2">Pesquisar repositórios no GitHub</h4>
      <Input
        type="search"
        name="search"
        id="search"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        onKeyDown={() => {
          clearTimeout(typingTimer);
        }}
        onKeyUp={() => {
          clearTimeout(typingTimer);

          typingTimer = setTimeout(() => {
            if (repoName.length === 0) return;

            searchRepos();
          }, 400);
        }}
      />
      <Paginator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        per_page={per_page}
        total_count={responseData.total_count}
      />
      <ReposTable repos={responseData.items} isLoading={isLoading} />
    </div>
  );
};

export default SearchRepos;
