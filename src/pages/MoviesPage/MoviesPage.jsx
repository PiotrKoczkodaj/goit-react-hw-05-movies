import { useState } from "react";
import { MoviesListPages } from "pages/MoviesListPages/MoviesListPages";
import { useNavigate } from "react-router-dom";

export const MoviesPage = () => {

    const navigate = useNavigate();
  const [queryValue, setQueryValue] = useState('');
    const [isRender, setIsRender] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setQueryValue(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/movies?query=${queryValue}`)
        setIsRender(true)
        
    }

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