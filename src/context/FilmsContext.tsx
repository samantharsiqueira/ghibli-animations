import { createContext } from 'react';

// Tipagem do objeto dentro do array
export interface Film {
  id: number;
  title: string;
  description: string;
  director: string;
  image: string;
  release_date: string;
  favorite: boolean;

}
// Tipagem do array
export type FilmContextType = {
  films:Film[];
  favorites: Film[];
  setFavorites: React.Dispatch<React.SetStateAction<Film[]>>;
};

// Contexto dos filmes
const FilmsContext = createContext({} as FilmContextType);

export default FilmsContext;
