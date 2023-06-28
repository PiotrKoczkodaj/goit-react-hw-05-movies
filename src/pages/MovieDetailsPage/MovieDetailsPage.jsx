
import { useParams } from "react-router-dom";
import { fetchTrendingMovies } from "utils/FetchTrendingMovies";

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
 

    fetchTrendingMovies().then(resp => {
        return resp.data.results
    }).then(resp => {
        resp.map(movie => {
            if (movie.id === movieId) {
                   console.log('D')
               }
           })
       })
    return (
        <p>movieees</p>
    )
}