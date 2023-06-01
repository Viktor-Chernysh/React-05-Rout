import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import {
  Container,
  CardWrapper,
  ProductName,
} from '../components/FilmList/FilmsList';
import { getMovies } from 'fakeAPI';
import { Link } from 'react-router-dom';

export default function Movies(params) {
  const { handleSubmit, register, reset } = useForm();
  const [movieQuery, setMovieQuery] = useState(null);
  const [movies, setMovies] = useState(null);
  const IMG_URL = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    if (movieQuery === null) return;
    async function find() {
      const response = await getMovies(movieQuery);
      setMovies(response.results);
      reset();
    }
    find();
  }, [movieQuery, reset]);

  async function onSubmit(data) {
    if (data.movieToFind === '') return;
    setMovieQuery(data.movieToFind);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('movieToFind')}
          placeholder="Enter you request..."
        />
        <button type="submit">Go</button>
      </form>
      <Container>
        {movies &&
          movies.map(movie => {
            return (
              <CardWrapper key={movie.id}>
                <Link to={`${movie.id}`}>
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
