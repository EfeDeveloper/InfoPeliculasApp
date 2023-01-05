import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {
  IMovieDBMoviesResponse,
  MoviesStates,
} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesStates>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlaying = movieDB.get<IMovieDBMoviesResponse>('/now_playing');
    const popular = movieDB.get<IMovieDBMoviesResponse>('/popular');
    const topRated = movieDB.get<IMovieDBMoviesResponse>('/top_rated');
    const upcoming = movieDB.get<IMovieDBMoviesResponse>('/upcoming');

    const resp = await Promise.all([nowPlaying, popular, topRated, upcoming]);
    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
