import { useEffect, useState } from 'react';
import { fetchMoviesSearch } from 'utils/FetchMoviesSearch';
import { Link } from 'react-router-dom';

export const MoviesListPages = ({ queryValue }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
    
   useEffect(() => {
    fetchMoviesSearch(queryValue).then(resp => {
        setSearchedMovies([...resp]);
    })
  },[searchedMovies]);

    return (
        <ul>
            {searchedMovies.map(movie => (
                <Link to={`${movie.id}`}><li>{movie.title }</li></Link>
        ))}
        </ul>
)
 
};
