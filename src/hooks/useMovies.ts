import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {
  IMovieDBMoviesResponse,
  MoviesStates,
} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesStates>({
    isLoading: true,
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

    const [nowPlayingResp, popularResp, topRatedResp, upcomingResp] =
      await Promise.all([nowPlaying, popular, topRated, upcoming]);

    setMoviesState({
      isLoading: false,
      nowPlaying: nowPlayingResp.data.results,
      popular: popularResp.data.results,
      topRated: topRatedResp.data.results,
      upcoming: upcomingResp.data.results,
    });
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    ...moviesState,
  };
};
