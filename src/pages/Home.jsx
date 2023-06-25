import { fetchTrendingMovies } from "components/FetchTrendingMovies"

export const Home = ({movies}) => {
  
    
 console.log(movies)

   
    
    return (
        <>
            <h4>Trending Today</h4>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title || movie.name }</li>
                ))}
            </ul>
        </>
        
    )
}