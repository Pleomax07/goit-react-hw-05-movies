import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../../servises/API';
import css from './TrendingToday.module.css';

const TrendingToday = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    try {
      getPopularMovies().then(setPopularMovies);
    } catch {
      console.log('error');
    }
  }, []);

  return (
    <ul className={css.list}>
      {popularMovies.map(({ id, title, name, poster_path }) => (
        <li key={id} className={css.item}>
          <Link to={`movies/${id}`} className={css.link}>
            <h2>{title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default TrendingToday;
