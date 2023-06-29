import { Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { fetchTrendingMovies } from 'utils/FetchTrendingMovies';
import { Cast } from './Cast/Cast';
import { Review } from './Review/Review';
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
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review/>} />
          </Route>
          
          
        </Route>
      </Routes>
    </div>
  );
};