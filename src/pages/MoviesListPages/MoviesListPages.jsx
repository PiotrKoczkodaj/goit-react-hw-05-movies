import { useEffect, useState } from 'react';
import { fetchMoviesSearch } from 'utils/FetchMoviesSearch';
import { Link } from 'react-router-dom';

export const MoviesListPages = ({ queryValue }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
    
   useEffect(() => {
    fetchMoviesSearch(queryValue).then(resp => {
        setSearchedMovies([...resp]);
    })
  },[searchedMovies,queryValue]);

    return (
        <ul>
            {searchedMovies.map(movie => (
                <Link key={movie.id } to={`${movie.id}`}><li key={movie.id}>{movie.title }</li></Link>
        ))}
        </ul>
)
 
};
