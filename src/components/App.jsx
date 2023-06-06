import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import MovieDetails from './MovieDetails/MovieDetails.jsx';
// import Cast from 'pages/Cast.jsx';
// import Reviews from 'pages/Reviews.jsx';
import { Button } from '../pages/NotFound.js';
import { Container } from './SharedLayout/SharedLayout.js';
const Home = lazy(() => import('pages/Home.jsx'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout.jsx'));
const Movies = lazy(() => import('pages/Movies.jsx'));
const Cast = lazy(() => import('pages/Cast.jsx'));
const Reviews = lazy(() => import('pages/Reviews.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
//Для именных экспортов!!!!!!!!!!!!
// const Home = lazy(() => import('pages/Home.jsx')).then(module => ({
//   ...module,
//   default: module.Gallery,
// }));

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
