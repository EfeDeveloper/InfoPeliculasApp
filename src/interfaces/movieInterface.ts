export interface IMovieDBMoviesResponse {
  dates?: Dates;
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = 'en',
  ID = 'id',
}

export interface MoviesStates {
  isLoading: boolean;
  nowPlaying: IMovie[];
  popular: IMovie[];
  topRated: IMovie[];
  upcoming: IMovie[];
}
