import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiRoutes, apiGitHub } from '../contracts/routes';
import ReposTable from './helpers/ReposTable';
import { Repository, FavRepo } from '../contracts/responses';

const FavRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get<FavRepo[]>(apiRoutes.index)
      .then(({ data }) => {
        axios
          .all(data.map(favRepo => axios.get(apiGitHub.repoByUser(favRepo.user, favRepo.name))))
          .then(axios.spread((...responses) => {
            setRepos(responses.map(res => res.data));
            setIsLoading(false);
          }))
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <ReposTable repos={repos} isLoading={isLoading} />
    </div>
  )
}

export default FavRepos;