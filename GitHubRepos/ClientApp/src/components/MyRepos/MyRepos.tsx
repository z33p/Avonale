import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Repository } from '../../contracts/responses';
import Searcher from './Searcher';


const MyRepos: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([] as Repository[])

  // useEffect(() => {
  //   axios
  //     .get(`https://api.github.com/users/z33p/repos`)
  //     .then(res => {
  //       setRepos(res.data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       setLoading(false);
  //     })
  // }, [])

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
                  <td>{repo.name}</td>
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
