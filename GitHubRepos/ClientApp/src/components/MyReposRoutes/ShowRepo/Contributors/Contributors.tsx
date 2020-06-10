import React, { useState, useEffect } from 'react';
import { Contributor } from '../../../../contracts/responses';
import ContributorView from './ContributorView';
import axios from 'axios';

interface Props {
  contributorsUrl: string
}

const Contributors: React.FC<Props> = ({ contributorsUrl }) => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(contributorsUrl)
      .then(res => {
        setContributors(res.data);
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [contributorsUrl])

  if (isLoading)
    return (
      <div className="">
        <h2>Loading...</h2>
      </div>
    )

  return (
    <div className="py-2 container">
      <div className="row justify-content-center">
        {contributors.map(contributor => (
          <ContributorView contributor={contributor} />
        ))}
      </div>
    </div>);
}

export default Contributors;