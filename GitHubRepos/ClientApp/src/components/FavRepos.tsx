import React, { useState, useEffect } from 'react';
import { FavRepo } from '../contracts/responses';
import axios from 'axios';

const FavRepos: React.FC = () => {

  const [favRepos, setFapRepos] = useState<FavRepo[]>([]);

  useEffect(() => {
    axios
      .get("/api/favrepo")
      .then(res => setFapRepos(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <ul>
        {favRepos.map(favRepo => (
          <li key={favRepo.id}>
            {favRepo.repoId}
          </li>
        ))}
      </ul>
    </div>);
}

export default FavRepos;