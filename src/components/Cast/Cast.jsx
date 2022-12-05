import { getMovieСastById } from '../../servises/API';
import { useEffect, useState } from 'react';
import DefaultImage from '../../DefaultImage/DefaultImage.jpg'
import css from './Cost.module.css'

const Cast = () => {
  // const { movieCast } = useParams();
  const [movieCastById, setMovieCastById] = useState([]);
  useEffect(() => {
    const movieCast = JSON.parse(localStorage.getItem('savedMovie'));
    try {
      getMovieСastById(movieCast).then(setMovieCastById);
    } catch {
      console.log('error');
    }
  }, []);

  return (
    <>
    {movieCastById.length > 0 ? (
      <ul className={css.list}>
        {movieCastById.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id} className={css.item}>
              <img 
                src={ profile_path === null || profile_path === undefined
                  ? DefaultImage
                  : `https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width={200}
              />
              <b>{name}</b>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>) : (<b>We don't have any cast information for this movie</b>)}
    </>
  );
};
export default Cast;