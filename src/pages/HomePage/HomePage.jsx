import { fetchTrendingMovies } from "utils/FetchTrendingMovies";
import { useEffect,useState } from "react";


export const HomePage = () => {
const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(resp => {
      setTrendingMovies([...resp.data.results])
    })
  }, []);
    
    return (
        <>
    <h3>Trending today</h3>
        <ul>
                {trendingMovies.map(movie => (
                    <p key={movie.id}>{movie.id }</p>
         ))}
        </ul>
        </>
       
    )
}