import React, { useState, useEffect } from 'react';
import { StarFill, Star, StarHalf } from 'react-bootstrap-icons';
import axios from 'axios';
import { apiRoutes } from '../../../contracts/routes';
import { FavRepo, Repository } from '../../../contracts/responses';

interface Props {
  repo: Repository;
}

const iconButton = {
  borderRadius: 100 + "%",
  cursor: "pointer",
};

const StarButton: React.FC<Props> = ({ repo }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiRoutes.show(repo.id))
      .then(() => {
        setIsToggled(true);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
  }, [repo.id])

  const toggleOnClick = () => {
    setIsLoading(true);

    const favRepo: FavRepo = {
      repoId: repo.id,
      name: repo.name,
      user: repo.owner.login
    }

    axios
      .post(apiRoutes.toggle, favRepo)
      .then(() => {
        setIsToggled(!isToggled);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
  }

  if (isLoading)
    return (
      <StarHalf className="pb-1" style={iconButton} color="#FFEB3B" />
    );


  if (isToggled)
    return (
      <StarFill className="pb-1" style={iconButton} color="#FFEB3B" onClick={toggleOnClick} />
    );

  return (
    <Star className="pb-1" style={iconButton} onClick={toggleOnClick} />
  )
}

export default StarButton;