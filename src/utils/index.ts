import currencyFormatter from 'currency-formatter';

export const moviePosterPath = (posterPath: string | null) => {
  if (!posterPath) return '';

  return `https://image.tmdb.org/t/p/original/${posterPath}`;
};

export const currencyFormat = (currency: number) => {
  return currencyFormatter.format(currency, {code: 'USD'});
};
