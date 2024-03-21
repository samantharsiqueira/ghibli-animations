import { createContext, useState } from 'react';

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
};

// Contexto dos filmes
const FilmsContext = createContext({} as FilmContextType);

// Função que retorna o contexto dos filmes
export function FilmsProvider({ children }: { children: React.ReactNode }) {
  const [films, setFilms] = useState<Film[]>([]);

  return (
    <FilmsContext.Provider value={ { films } }>
      { children }
    </FilmsContext.Provider>

  );
}

export default FilmsContext;
