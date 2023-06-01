import { Link, Header, Container } from './SharedLayout';
import { Outlet } from 'react-router-dom';

export default function SharedLayout(params) {
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
          <Outlet />
        </Container>
      </main>
    </>
  );
}
