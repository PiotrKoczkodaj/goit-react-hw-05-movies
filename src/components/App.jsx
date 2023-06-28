import { Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { fetchTrendingMovies } from 'utils/FetchTrendingMovies';
import { Cast } from './Cast/Cast';
export const App = () => {

 const [ ,setTrendingMovies] = useState([]);
  
     useEffect(() => {
     fetchTrendingMovies().then(resp => {
       setTrendingMovies([...resp.data.results]);
     });
     }, []);
  

  
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element ={<Cast/>}/>
          </Route>
          
          
        </Route>
      </Routes>
    </div>
  );
};