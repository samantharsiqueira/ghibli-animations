import React from 'react';
import FilmsContext, { Film } from '../context/FilmsContext';

export default function Favorites() {
  const { favorites, setFavorites } = React.useContext(FilmsContext);

  const handleFavorite = (film:Film) => {
    const isFavourite = favorites.some((favFilm) => favFilm.id === film.id);

    if (isFavourite) {
      setFavorites(favorites.filter((favFilm) => favFilm.id !== film.id));
    } else {
      setFavorites([...favorites, film]);
    }
  };

  return (
    <div>
      <h1>Favorites</h1>
      { favorites.map((film) => (
        <div key={ film.id }>
          <h2>{film.title}</h2>
          <img src={ film.image } alt={ film.title } />
          <p>{film.description}</p>
          <button type="button" onClick={ () => handleFavorite(film) }>Favoritar</button>
        </div>
      ), []) }
      <a href="/">Voltar</a>
    </div>
  );
}
