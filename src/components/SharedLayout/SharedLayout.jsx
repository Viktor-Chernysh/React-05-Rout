import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Header, Container } from './SharedLayout';

export default function SharedLayout() {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
      </Container>

      <main>
        <Container>
          <Suspense fallback={<div>Loading---...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
