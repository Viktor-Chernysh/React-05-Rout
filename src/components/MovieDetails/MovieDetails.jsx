import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'fakeAPI';
import dataContext from 'context/context';

export default function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  // const [searchParams,
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetchMoviesDetails(id);
        setDetails(response);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);

  return (
    <>
      {details && <div>{details.title}</div>}
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <dataContext.Provider value={details}>
        <Outlet />
      </dataContext.Provider>
    </>
  );
}
