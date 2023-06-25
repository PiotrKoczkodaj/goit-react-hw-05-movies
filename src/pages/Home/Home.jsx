import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';



export const Home = ({ movies }) => {

    return (
        <>
            <h4>Trending Today</h4>
            <ul className={styles.moviesList}>
                
                {movies.map(movie => (
                    <Link key={movie.id} to={`movies/${movie.id}`}><li key={movie.id}>{movie.title || movie.name}</li></Link>
                ))
                  
                    }
                   
            </ul>
         
        </>
        
    )
}