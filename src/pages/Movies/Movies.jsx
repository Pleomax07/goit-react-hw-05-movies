import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import css from './Movies.module.css';
import { getSearchMovies } from '../../servises/API';
import DefaultImage from '../../DefaultImage/DefaultImage.jpg';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    getSearchMovies(searchQuery).then(setSearchMovie);
  }, [searchQuery]);

  const randerMovies = evt => {
    evt.preventDefault();

    const query = evt.target.elements.input.value;
    if (!query) {
      alert('Введите название фильма');
      return;
    }

    setSearchParams({ query });
    evt.target.reset();
  };

  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={randerMovies}>
          <button className={css.SearchFormButton} type="submit">
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="input"
            placeholder="Search movies"
          />
        </form>
      </header>
      <ul className={css.list}>
        {searchMovie.map(({ id, title, poster_path }) => {
          return (
            <li key={id} className={css.item}>
              <Link to={`${id}`} state={location}>
                <h4 className={css.title}>{title}</h4>
                <img
                  src={
                    poster_path === null || poster_path === undefined
                      ? DefaultImage
                      : `https://image.tmdb.org/t/p/w300/${poster_path}`
                  }
                  alt={title}
                  width="300px"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
