import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTrendingMovies } from "utils/FetchTrendingMovies";

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
 const [trendingMovies, setTrendingMovies] = useState([]);
  
     useEffect(() => {
     fetchTrendingMovies().then(resp => {
       setTrendingMovies([...resp.data.results]);
     });
     }, []);
    trendingMovies.map(movie => {
        if (movie.id === movieId) {
         console.log('c')
     }
        return null
})

    return (
        <p>movieees</p>
    )
}