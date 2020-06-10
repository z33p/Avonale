import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MyReposContext } from '../MyReposRoutes';
import ReposTable from '../../helpers/ReposTable';


const MyRepos: React.FC = () => {
  const myRepos = useContext(MyReposContext);

  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState(myRepos);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/z33p/repos`)
      .then(res => {
        setRepos(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
  }, [])

  return (
    <div>
      <h1 id="tabelLabel">Meus repositórios</h1>
      <p>This component demonstrates fetching data from the server.</p>
      <ReposTable repos={repos} isLoading={isLoading} />
    </div>
  );
}

export default MyRepos;
