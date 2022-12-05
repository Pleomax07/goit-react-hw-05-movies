import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../servises/API';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const goBackLink = location?.state ?? '/';

  useEffect(() => {
    localStorage.setItem('savedMovie', JSON.stringify(movieId));
  }, [movieId]);

  const [movieById, setMovieById] = useState([]);
  useEffect(() => {
    try {
      getMovieById(movieId).then(setMovieById);
    } catch {
      console.log('error');
    }
  }, [movieId]);
  //  console.log(movieById)
  const { poster_path, title, genres, overview, vote_average, release_date } =
    movieById;
  return (
    <>
      <Link to={goBackLink} className={css.link}>
        Go back
      </Link>
      {release_date && <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>}
      <b>{`User score ${(vote_average * 10).toFixed(0)} %`}</b>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      )}
      <ul>
        <li className={css.item}>
          <Link to="cast" state={location.state} className={css.link}>
            Cast
          </Link>
        </li>
        <li className={css.item}>
          <Link to="reviews" state={location.state} className={css.link}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
