import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FilmsContext, { Film } from './context/FilmsContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
        const filmsData = await response.json();
        setFilms(filmsData);
      } catch (error) {
        console.error('error searching films', error);
      }
    };
    fetchFilms();
    console.log(films);
  }, [films]);
  return (
    <FilmsContext.Provider value={ { films: [] } }>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/favorites" Component={ Favorites } />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
