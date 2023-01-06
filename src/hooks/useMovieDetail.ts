import {ICast, IMovieDetails, ImovieFull} from '../interfaces/detailsInterface';
import movieDB from '../api/movieDB';
import {useEffect, useState} from 'react';

export const useDetailScreen = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetail = await movieDB.get<ImovieFull>(`/${movieId}`);
    const credits = await movieDB.get<ICast>(`/${movieId}/credits`);

    const [movieDetailsResp, castResponse] = await Promise.all([
      movieDetail,
      credits,
    ]);
    setMovieDetails({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...movieDetails,
  };
};
