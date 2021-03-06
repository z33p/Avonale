import React from "react";
import { Repository } from "../../contracts/responses";
import { NavLink, Spinner, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { appRoutes } from "../../contracts/routes";

interface Props {
  repos: Repository[];
  isLoading: boolean;
}

const ReposTable: React.FC<Props> = ({ repos, isLoading }) => {
  // if (isLoading) return (
  if (isLoading)
    return (
      <div className="py-5 d-flex justify-content-around">
        <Spinner color="info" />
      </div>
    );

  if (repos.length === 0)
    return (
      <div className="pt-5 container">
        <div className="pt-5 row justify-content-center align-items-center">
          <h1 className="display-4 text-secondary">Vazio</h1>
        </div>
      </div>
    );

  return (
    <Table responsive hover className="py-2">
      <thead>
        <tr>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
        {repos.map((repo) => (
          <tr key={repo.id}>
            <td>
              <NavLink
                tag={Link}
                className="text-dark"
                to={appRoutes.myRepos.show.set(repo.owner.login, repo.name)}
              >
                {repo.name}
              </NavLink>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReposTable;
