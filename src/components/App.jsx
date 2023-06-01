import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout.jsx';
import Movies from 'pages/Movies.jsx';
import MovieDetails from './MovieDetails/MovieDetails.jsx';
import Home from 'pages/Home.jsx';
import Cast from 'pages/Cast.jsx';
import Reviews from 'pages/Reviews.jsx';
import { Button } from '../pages/NotFound.js';
import { Container } from './SharedLayout/SharedLayout.js';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <Container>
            <Button to="/"> Home</Button>
            <p>404 Not Found</p>
          </Container>
        }
      />
    </Routes>
  );
};
export default App;
