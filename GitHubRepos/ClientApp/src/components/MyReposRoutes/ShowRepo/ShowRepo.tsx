import React, { useContext, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MyReposContext } from '../MyReposRoutes';
import axios from 'axios';
import Contributors from './Contributors/Contributors';
import { Spinner } from 'reactstrap';

interface Params {
  user: string;
  repo: string;
}

const ShowRepo: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const repos = useContext(MyReposContext);

  const [isLoading, setIsLoading] = useState(repos.length === 0);

  const [repo, setRepo] = useState(repos.find(r => r.name === match.params.repo));

  useEffect(() => {
    if (isLoading)
      axios
        .get(`https://api.github.com/repos/${match.params.user}/${match.params.repo}`)
        .then(res => {
          setRepo(res.data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        })
  }, [isLoading, match.params.repo, match.params.user])

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
    )
  }

  return (
    <div className="">
      <h2>{match.params.repo}</h2>

      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>nome</th>
            <th> descrição</th>
            <th> linguagem</th>
            <th> última data de atualização</th>
            <th> dono do repositório</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {repo.name}
            </td>
            <td>
              {repo.description === null ? "" : repo.description}
            </td>
            <td>
              {repo.language}
            </td>
            <td>
              {repo.updated_at}
            </td>
            <td>
              {repo.owner.login}
            </td>
          </tr>
        </tbody>
      </table>
      <Contributors contributorsUrl={`https://api.github.com/repos/${match.params.user}/${match.params.repo}/contributors`} />
    </div>
  );
}

export default ShowRepo;