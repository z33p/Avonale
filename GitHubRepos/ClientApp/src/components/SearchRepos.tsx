import React, { useState } from 'react';
import { Repository } from '../contracts/responses';
import axios from 'axios';
import ReposTable from './helpers/ReposTable';
import { Input } from 'reactstrap';

const SearchRepos: React.FC = () => {
  const [repoName, setRepoName] = useState('');
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoName(e.target.value);
  }

  const searchRepos = () => {
    setIsLoading(true);
    axios
      .get(`https://api.github.com/search/repositories?q=${repoName}`)
      .then(res => {
        setRepos(res.data.items);
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
      })
  }

  let typingTimer: any = null;
  return (
    <div className="p-4">
      <h4 className="pb-2">Pesquisar repositórios no GitHub</h4>
      <Input
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
          }, 400);
        }}
      />
      <ReposTable repos={repos} isLoading={isLoading} />
    </div>
  );
}

export default SearchRepos;