import React, { useState, useEffect } from "react";
import { Contributor } from "../../../../contracts/responses";
import ContributorView from "./ContributorView";
import axios from "axios";
import { Spinner } from "reactstrap";
import { apiGitHub } from "../../../../contracts/routes";

interface Props {
  user: string;
  repo: string;
}

const Contributors: React.FC<Props> = ({ user, repo }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [collaborators, setCollaborators] = useState<Contributor[]>([]);

  useEffect(() => {
    axios
      .get<Contributor[]>(apiGitHub.repoContributors(user, repo))
      .then((res) => {
        setCollaborators(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user, repo]);

  if (isLoading)
    return (
      <div className="py-5 d-flex justify-content-around align-items-center">
        <Spinner type="grow" color="info" />
      </div>
    );

  return (
    <div className="py-2">
      <div className="row align-items-center">
        {collaborators.map((contributor) => (
          <ContributorView key={contributor.id} contributor={contributor} />
        ))}
      </div>
      {/* TODO: Add Pagination */}
    </div>
  );
};
export default Contributors;
