import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'fakeAPI';
import { useEffect, useState } from 'react';

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMoviesDetails(id).then(data => setCast(data.credits.cast));
  }, [id]);
  return (
    <div>
      {cast &&
        cast.map(el => (
          <div key={el.credit_id}>
            {el.profile_path ? (
              <img
                src={'https://image.tmdb.org/t/p/original/' + el.profile_path}
                alt=""
                width={140}
              />
            ) : (
              <span>
                <b>no image</b>
              </span>
            )}
            <p>{el.name}</p>
          </div>
        ))}
    </div>
  );
}
