import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrending } from 'fakeAPI';
import {
  Container,
  CardWrapper,
  ProductName,
} from '../components/FilmList/FilmsList';

export default function Home() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  // const [id, setId] = useState(null);
  // const navigate = useNavigate();
  // console.log(movies);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const { results } = await getTrending();
        setMovies(results);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);
  // id && navigate(`movies/${id}`);
  return (
    <Container>
      {movies &&
        movies.map(movie => {
          return (
            <CardWrapper key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                  width={240}
                />
                <ProductName>{movie.original_title}</ProductName>
              </Link>
            </CardWrapper>
          );
        })}
    </Container>
  );
}
