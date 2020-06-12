import React, { useState, useEffect, useCallback, useRef } from "react";
import { GitHubResponse } from "../contracts/responses";
import axios from "axios";
import ReposTable from "./helpers/ReposTable";
import { apiGitHub, appRoutes } from "../contracts/routes";
import Paginator from "./helpers/Paginator";
import { RouteComponentProps, useHistory } from "react-router-dom";
import ErrorPage from "./helpers/ErrorPage";

interface Params {
  name: string;
  page: string;
  per_page: string;
}

const SearchRepos: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const history = useHistory();

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
    if (inputEl.current === null) return;
    if (inputEl.current.value.length === 0) return;

    setIsLoading(true);
    setError(false);

    axios
      .get<GitHubResponse>(
        apiGitHub.searchByName(inputEl.current.value, currentPage, per_page)
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
  }, [currentPage, per_page]);

  useEffect(() => {
    searchRepos();
  }, [currentPage, searchRepos]);

  let typingTimer: any = null;
  return (
    <div className="p-4">
      <h4 className="pb-2">Pesquisar repositórios no GitHub</h4>
      <input
        type="search"
        name="search"
        id="search"
        defaultValue={match.params.name ?? ""}
        ref={inputEl}
        className="form-control"
        onKeyDown={() => {
          clearTimeout(typingTimer);
        }}
        onKeyUp={() => {
          clearTimeout(typingTimer);

          typingTimer = setTimeout(() => {
            if (inputEl.current === null) return;
            if (inputEl.current.value.length === 0) return;

            history.replace(
              appRoutes.searchRepos.pagination.set(
                inputEl.current.value,
                currentPage,
                per_page
              )
            );

            searchRepos();
          }, 800);
        }}
      />
      {error ? (
        <ErrorPage />
      ) : (
        <div>
          <Paginator
            currentPage={currentPage}
            setCurrentPage={(page: number) => {
              if (inputEl.current === null) return;

              history.replace(
                appRoutes.searchRepos.pagination.set(
                  inputEl.current.value,
                  page,
                  per_page
                )
              );

              setCurrentPage(page);
            }}
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
