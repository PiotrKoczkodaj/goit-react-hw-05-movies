import { useEffect, useState } from 'react';
import { fetchMoviesSearch } from 'utils/FetchMoviesSearch';

export const MoviesListPages = ({ queryValue }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
    
    
   useEffect(() => {
    fetchMoviesSearch(queryValue).then(resp => {
        setSearchedMovies([...resp]);
    })
  },[searchedMovies]);

    console.log(searchedMovies)
    return (
        <>
            {searchedMovies.map(el => (
                <p>{el.title }</p>
        ))}
        </>
)
 
};
