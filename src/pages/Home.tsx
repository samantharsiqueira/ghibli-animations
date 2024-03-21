import React from 'react';
import FilmsContext, { Film } from '../context/FilmsContext';
import Header from '../components/Header';

export default function Home() {
  const { films, favorites, setFavorites } = React.useContext(FilmsContext);

  const handleFavorite = (film:Film) => {
    const isFavourite = favorites.some((favFilm) => favFilm.id === film.id);

    if (isFavourite) {
      setFavorites(favorites.filter((favFilm) => favFilm.id !== film.id));
    } else {
      setFavorites([...favorites, film]);
      console.log(favorites);
    }
  };
  return (
    <div>
      <Header />
      <h1>Films</h1>

      {films.map((film) => (
        <div key={ film.id }>
          <h2>{film.title}</h2>
          <img src={ film.image } alt={ film.title } />
          <p>{film.description}</p>
          <button type="button" onClick={ () => handleFavorite(film) }>Favoritar</button>
        </div>
      ), []) }
      ,
    </div>
  );
}
