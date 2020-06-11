import React, { useContext, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { MyReposContext } from "../MyReposRoutes";
import axios from "axios";
import Contributors from "./Contributors/Contributors";
import { Spinner, Table } from "reactstrap";
import StarButton from "./StarButton";
import { apiGitHub } from "../../../contracts/routes";

interface Params {
  user: string;
  repo: string;
}

const ShowRepo: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const { responseData } = useContext(MyReposContext);

  const [isLoading, setIsLoading] = useState(responseData.items.length === 0);

  const [repo, setRepo] = useState(
    responseData.items.find((r) => r.name === match.params.repo)
  );

  useEffect(() => {
    if (isLoading)
      axios
        .get(apiGitHub.repoByUser(match.params.user, match.params.repo))
        .then((res) => {
          setRepo(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
  }, [isLoading, match.params.repo, match.params.user]);

  if (repo === undefined) {
    if (isLoading)
      return (
        <div className="py-5 d-flex justify-content-around">
          <Spinner type="grow" color="info" />
        </div>
      );

    return (
      <div className="">
        <h1>Error not found!</h1>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="py-2">
        <span className="pr-2">
          <StarButton repo={repo} />
        </span>
        <span>{repo.name}</span>
      </h2>

      <Table dark responsive bordered className="py-2">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Linguagem</th>
            <th>Última modificação</th>
            <th>Dono</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{repo.name}</td>
            <td>{repo.description ?? "-"}</td>
            <td>{repo.language ?? "-"}</td>
            <td>{new Date(repo.updated_at).toLocaleString()}</td>
            <td>{repo.owner.login}</td>
          </tr>
        </tbody>
      </Table>
      <Contributors user={match.params.user} repo={match.params.repo} />
    </div>
  );
};

export default ShowRepo;
