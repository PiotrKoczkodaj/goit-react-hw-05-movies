import { useState } from "react";
import { Link } from "react-router-dom";


export const MoviesPage = () => {

  const [queryValue, setQueryValue] = useState('');
 
    const handleChange = (e) => {
        e.preventDefault();
        setQueryValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hfhasfiho')
    }
    
    return (
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <Link to={`/movies?query=${queryValue}`}><button type="submit">Search</button></Link>
        </form>  
    )
}