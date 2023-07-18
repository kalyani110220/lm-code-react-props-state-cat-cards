import React from 'react';
import Cat from '../data/cat';

interface CatCardProps {
  cat: Cat;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <div className="card">
      <h3 className="card__text card__header">{cat.name}</h3>
      <p className="card__text">Species: {cat.species}</p>
      <p className="card__text">Favourite Food(s): {cat.favFoods.join(', ')}</p>
      <p className="card__text">Birth Year: {cat.birthYear}</p>
    </div>
  );
};

export default CatCard;
