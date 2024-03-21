import React from 'react';
import FilmsContext, { Film } from '../context/FilmsContext';
import Header from '../components/Header';

export default function Favorites() {
  const { favorites, setFavorites } = React.useContext(FilmsContext);

  const handleFavorite = (film:Film) => {
    setFavorites(favorites.filter((favFilm) => favFilm.id !== film.id));
  };

  return (
    <div>
      <Header />
      <h1>Favorites</h1>
      { favorites.map((film) => (
        <div key={ film.id }>
          <h2>{film.title}</h2>
          <img src={ film.image } alt={ film.title } />
          <p>{film.description}</p>
          <button type="button" onClick={ () => handleFavorite(film) }>Favoritar</button>
        </div>
      )) }
    </div>
  );
}
