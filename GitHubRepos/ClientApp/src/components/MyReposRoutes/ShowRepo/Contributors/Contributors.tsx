import React, { useState, useEffect } from "react";
import { Contributor } from "../../../../contracts/responses";
import ContributorView from "./ContributorView";
import axios from "axios";
import { Spinner } from "reactstrap";
import { apiGitHub } from "../../../../contracts/routes";
import { useAlert } from "react-alert";
import ErrorPage from "../../../helpers/ErrorPage";

interface Props {
  user: string;
  repo: string;
}

const Contributors: React.FC<Props> = ({ user, repo }) => {
  const alert = useAlert();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [collaborators, setCollaborators] = useState<Contributor[]>([]);

  useEffect(() => {
    axios
      .get<Contributor[]>(apiGitHub.repoContributors(user, repo))
      .then((res) => {
        if (res.status === 204) setCollaborators([]);
        else setCollaborators(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert.error("Erro na Requisição");
        setError(true);
        setIsLoading(false);
      });
  }, [user, repo, alert]);

  if (isLoading)
    return (
      <div className="py-5 d-flex justify-content-around align-items-center">
        <Spinner type="grow" color="info" />
      </div>
    );

  if (error) return <ErrorPage />;

  return (
    <div className="py-2">
      <div className="row align-items-center">
        {collaborators.length === 0 ? (
          <div className="pt-5 container">
            <div className="pt-5 row justify-content-center align-items-center">
              <h1 className="display-4 text-secondary">Vazio</h1>
            </div>
          </div>
        ) : (
          collaborators.map((contributor) => (
            <ContributorView key={contributor.id} contributor={contributor} />
          ))
        )}
      </div>
      {/* TODO: Add Pagination */}
    </div>
  );
};
export default Contributors;
