import { fetchTrendingMovies } from "components/FetchTrendingMovies"

export const Home = ({movies}) => {
  
    
 console.log(movies)

   
    
    return (
        <>
            <h4>Trending Today</h4>
            {movies.map(r => (
                <p>{r.title}</p>
            )
                
            )}
        </>
        
    )
}