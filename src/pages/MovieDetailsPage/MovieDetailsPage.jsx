
import { useParams } from "react-router-dom";
import { fetchTrendingMovies } from "utils/FetchTrendingMovies";

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
 

    fetchTrendingMovies().then(resp => {
        resp.data.results.map(movie => {
            console.log(movie.id===movieId)
            
        })
    return null})
    return (
        <p>movieees</p>
    )
}