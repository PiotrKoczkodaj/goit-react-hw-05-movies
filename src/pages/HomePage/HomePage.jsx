import { fetchTrendingMovies } from 'utils/FetchTrendingMovies';
import { useEffect, useState } from 'react';
import { Link,useLocation} from 'react-router-dom';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(resp => {
      setTrendingMovies([...resp.data.results]);
    });
  }, []);

  const location = useLocation();
  
  return (
    <>
      <h3>Trending today</h3>
      <ul>
        {trendingMovies.map(movie => (
          <Link key={movie.id} to={`movies/${movie.id}`} state={{ from: location }}>
            <li key={movie.id}>{movie.title || movie.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};
