import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, movieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculasCartelera, setPeliculasCartelera] = useState<Movie[]>([]);

  const getMovies = async () => {
    const response = await movieDB.get<movieDBNowPlaying>('/now_playing');
    const peliculas = response.data.results;

    setPeliculasCartelera(peliculas);
    setIsLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    peliculasCartelera,
    isLoading,
  };
};
