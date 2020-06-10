import React from 'react';
import { Contributor } from '../../../../contracts/responses';

interface Props {
  contributor: Contributor
}

const image = {
  width: 300 + "px",
  height: 300 + "px"
}

const ContributorView: React.FC<Props> = ({ contributor }) => {
  return (
    <figure className="p-2 col-md-12 col-lg-4">
      <img src={contributor.avatar_url} alt="Avatar" style={image} />
      <figcaption>{contributor.login}</figcaption>
    </figure>
  );
}

export default ContributorView;