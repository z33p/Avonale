import React from 'react';
import { Repository } from '../../contracts/responses';
import { NavLink, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../contracts/routes';

interface Props {
  repos: Repository[];
  isLoading: boolean;
}

const ReposTable: React.FC<Props> = ({ repos, isLoading }) => {
  // if (isLoading) return (
  if (isLoading) return (
    <div className="py-5 d-flex justify-content-around">
      <Spinner color="info" />
    </div>
  );

  if (repos.length === 0) return null;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
        {repos.map(repo => (
          <tr key={repo.id}>
            <NavLink
              tag={Link}
              className="text-dark"
              to={appRoutes.myRepos.show(repo.owner.login, repo.name)}
            >
              {repo.name}
            </NavLink>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReposTable;