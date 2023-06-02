import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrending } from 'fakeAPI';
import {
  Container,
  CardWrapper,
  ProductName,
} from '../components/FilmList/FilmsList';

export default function Home() {
  const [movies, setMovies] = useState(null);
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

  return (
    <Container>
      {movies &&
        movies.map(movie => {
          return (
            <CardWrapper key={movie.id}>
              <Link to={`movies/${movie.id}`}>
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
