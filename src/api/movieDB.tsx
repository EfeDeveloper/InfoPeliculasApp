import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '9719d535719eea7cbfc0cba3b103769d',
    language: 'es-ES',
  },
});

export default movieDB;
