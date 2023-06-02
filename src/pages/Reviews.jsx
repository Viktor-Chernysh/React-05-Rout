import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'fakeAPI';
import { useEffect, useState } from 'react';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetchMoviesDetails(id).then(data => {
      setReviews(data.reviews.results);
      setSpinner(false);
    });
  }, [id]);

  console.log(reviews);
  return (
    <div>
      {spinner ? (
        'loading...'
      ) : reviews && reviews.length !== 0 ? (
        reviews.map(el => (
          <div key={el.id}>
            {el.author_details.avatar_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${el.author_details.avatar_path}`}
                alt=""
                width={80}
              />
            ) : (
              <p>
                <b>no image</b>
              </p>
            )}
            {el.author}
          </div>
        ))
      ) : (
        <p>
          <b>no reviews</b>
        </p>
      )}
    </div>
  );
}
