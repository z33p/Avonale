import React, { useState } from 'react';
import { Repository } from '../../contracts/responses';
import axios from 'axios';

interface Props {
  setRepos(repos: Repository[]): void;
}

const Searcher: React.FC<Props> = ({ setRepos }) => {
  const [repoName, setRepoName] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoName(e.target.value);
  }

  const searchRepos = () => {
    axios
      .get(`https://api.github.com/search/repositories?q=${repoName}+user:z33p`)
      .then(res => setRepos(res.data.items))
      .catch(err => console.log(err))
  }

  let typingTimer: any = null;
  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        value={repoName}
        onChange={onChange}
        onKeyDown={() => {
          clearTimeout(typingTimer);
        }}
        onKeyUp={() => {
          clearTimeout(typingTimer);

          typingTimer = setTimeout(() => {
            console.log('debounced');
            searchRepos();
          }, 600);
        }}
      />
    </div>
  );
}

export default Searcher;