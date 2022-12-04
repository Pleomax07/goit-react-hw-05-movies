import { getMovieReviews } from '../../servises/API';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [movieReviewsById, setMovieReviewsById] = useState([]);
  useEffect(() => {
    const movieReviews = JSON.parse(localStorage.getItem('savedMovie'));
    try {
      getMovieReviews(movieReviews).then(setMovieReviewsById);
    } catch {
      console.log('error');
    }
  }, []);
  return (
    <>
      {movieReviewsById.length > 0 ? (
        <ul>
          {movieReviewsById.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <b>We dont have any reviews for this movie</b>
      )}
    </>
  );
};

export default Reviews;
