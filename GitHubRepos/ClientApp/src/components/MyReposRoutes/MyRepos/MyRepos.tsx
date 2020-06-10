import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MyReposContext } from '../MyReposRoutes';
import Searcher from '../Searcher';
import { appRoutes } from '../../../contracts/routes';


const MyRepos: React.FC = () => {
  const myRepos = useContext(MyReposContext);

  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState(myRepos);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/z33p/repos`)
      .then(res => {
        setRepos(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      })
  }, [])

  return (
    <div>
      <h1 id="tabelLabel">Meus repositórios</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {loading
        ? <p><em>Loading...</em></p>
        :
        <div className="">
          <Searcher setRepos={setRepos} />
          <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {repos.map(repo =>
                <tr key={repo.id}>
                  <td>
                    <NavLink tag={Link} className="text-dark" to={appRoutes.myRepos.show(repo.owner.login, repo.name)}>
                      {repo.name}
                    </NavLink>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}

export default MyRepos;
