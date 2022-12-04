import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const KEY = '2e8e3377f481e01220e175bca17716f4';
            
export const getPopularMovies = async () => {
  const res = await axios(`${BASE_URL}/3/trending/movie/day?api_key=${KEY}`);
  return res.data.results;
};

export const getSearchMovies = async searchQuery => {
  const res = await axios(
    `${BASE_URL}/3/search/movie?api_key=${KEY}&query=${searchQuery}`
  );
  return res.data.results;
};

export const getMovieById = async movieId => {
  const res = await axios(
    `${BASE_URL}/3/movie/${movieId}?api_key=${KEY}`);
  return res.data;
};

export const getMovieСastById = async movieCast => {
  const res = await axios(
    `${BASE_URL}/3/movie/${movieCast}/credits?api_key=${KEY}`
  );
  return res.data.cast;
};

export const getMovieReviews = async movieReviews => {
  const res = await axios(
    `${BASE_URL}/3/movie/${movieReviews}/reviews?api_key=${KEY}`
  );
  return res.data.results;
};



