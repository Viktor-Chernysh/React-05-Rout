import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'fakeAPI';

export default function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const { current } = useRef(location.state?.from ?? '/movies');

  console.log(current);

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
  // console.log(location);
  return (
    <>
      <Link to={current}> Go back</Link>
      {details && <div>{details.title}</div>}
      {details && <div>{details.release_date}</div>}
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
      <Suspense fallback={<div>LADING Subpages ... </div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
