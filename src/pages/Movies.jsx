import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import {
  Container,
  CardWrapper,
  ProductName,
} from '../components/FilmList/FilmsList';
import { getMovies } from 'fakeAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const IMG_URL = 'https://image.tmdb.org/t/p/original/';

export default function Movies() {
  const { handleSubmit, register, reset } = useForm();
  // const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('movie') ?? '';

  useEffect(() => {
    if (movieQuery === '') return;
    async function find() {
      const { results } = await getMovies(movieQuery);
      setMovies(results);
    }
    find();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const writeSearchPrms = e => {
    const nextParams = e.target.value !== '' ? { movie: e.target.value } : {};
    setSearchParams(nextParams);
  };

  async function onSubmit(data) {
    if (data.movieToFind === '') return;
    const { results } = await getMovies(movieQuery);
    setMovies(results);
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('movieToFind')}
          value={movieQuery}
          placeholder="Enter you request..."
          onChange={writeSearchPrms}
        />
        <button type="submit">Go</button>
      </form>
      <Container>
        {movies &&
          movies.map(movie => {
            return (
              <CardWrapper key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  <img
                    src={`${IMG_URL}${movie.poster_path}`}
                    alt=""
                    width={240}
                  />
                  <ProductName>{movie.original_title}</ProductName>
                </Link>
              </CardWrapper>
            );
          })}
      </Container>
    </>
  );
}
