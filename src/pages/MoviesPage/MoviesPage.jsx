import { useState } from "react";
import { Link } from "react-router-dom";
import { MoviesListPages } from "pages/MoviesListPages/MoviesListPages";

export const MoviesPage = () => {

  const [queryValue, setQueryValue] = useState('');
    const [isRender, setIsRender] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setQueryValue(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
       setIsRender(true)
    }

//   <Link to={`/movies?query=${queryValue}`}></Link>
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button type="submit">Search</button>
            </form> 
            
           {isRender?<MoviesListPages queryValue={queryValue}/>:null} 
        </div>
           
    )
}