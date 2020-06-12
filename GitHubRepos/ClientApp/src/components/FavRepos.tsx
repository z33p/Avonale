import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiRoutes, apiGitHub } from "../contracts/routes";
import ReposTable from "./helpers/ReposTable";
import { Repository, FavRepo } from "../contracts/responses";
import { useAlert } from "react-alert";
import ErrorPage from "./helpers/ErrorPage";

const FavRepos: React.FC = () => {
  const alert = useAlert();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get<FavRepo[]>(apiRoutes.index)
      .then(({ data }) => {
        axios
          .all(
            data.map((favRepo) =>
              axios.get(apiGitHub.repoByUser(favRepo.user, favRepo.name))
            )
          )
          .then(
            axios.spread((...responses) => {
              setRepos(responses.map((res) => res.data));
              setIsLoading(false);
            })
          )
          .catch(() => {
            setError(true);
            setIsLoading(false);
            alert.error("API Server pode ser alcançado");
          });
      })
      .catch((err) => {
        console.log();
        alert.error("Erro na Requisição");
        setError(true);
        setIsLoading(false);
      });
  }, [alert]);

  if (error) return <ErrorPage />;

  return (
    <div>
      <ReposTable repos={repos} isLoading={isLoading} />
    </div>
  );
};

export default FavRepos;
