import { MainMenu } from './MainMenu/MainMenu';
import { Home } from 'pages/Home';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Movies } from 'pages/Movies';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <MainMenu>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies" end>
            Movies
          </Link>
        </nav>
      </MainMenu>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />}/>
      </Routes>
    </div>
  );
};
