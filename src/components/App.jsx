import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { MainMenu } from './MainMenu/MainMenu';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { fetchTrendingMovies } from './FetchTrendingMovies';

import { useState } from 'react';
import { useEffect } from 'react';




export const App = () => {
 
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(resp => {
      setTrendingMovies([...resp.results])
    })
  }, []);

  
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
          <Link to="/">
            Home
          </Link>
          <Link to="/movies">
            Movies
          </Link>
        </nav>
      </MainMenu>
      <Routes>
        <Route path='/' element={<Home movies={trendingMovies} />} />
        <Route path='/movies' element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails movies={ trendingMovies} />}/>
      </Routes>
    </div>
  );
};
