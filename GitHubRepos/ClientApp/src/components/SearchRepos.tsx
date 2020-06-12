import React, { useState, useEffect, useCallback } from "react";
import { GitHubResponse } from "../contracts/responses";
import axios from "axios";
import ReposTable from "./helpers/ReposTable";
import { Input } from "reactstrap";
import { apiGitHub } from "../contracts/routes";
import Paginator from "./helpers/Paginator";
import { RouteComponentProps } from "react-router-dom";
import ErrorPage from "./helpers/ErrorPage";

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
  const [error, setError] = useState(false);

  const [responseData, setResponseData] = useState<GitHubResponse>({
    total_count: 0,
    items: [],
  });

  const per_page = parseInt(match.params.per_page ?? 12);
  const searchRepos = useCallback(() => {
    setIsLoading(true);
    setError(false);

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
        setError(true);
        setIsLoading(false);
      });
  }, [currentPage, per_page, repoName]);

  useEffect(() => {
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
      {error ? (
        <ErrorPage />
      ) : (
        <div>
          <Paginator
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            per_page={per_page}
            total_count={responseData.total_count}
          />
          <ReposTable repos={responseData.items} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default SearchRepos;
