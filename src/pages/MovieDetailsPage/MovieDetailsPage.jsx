import { Link, useParams } from 'react-router-dom';
import { fetchMoviesInfo } from 'utils/FetchMoviesInfo';
import { useEffect, useState } from 'react';
import styles from './MovieDetailsPage.module.css';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    fetchMoviesInfo(movieId)
      .then(resp =>resp.data)
      .then(resp => {
        return setMovieInfo({ ...resp });
      });
  }, []);
    
  return (
    <>
        <Link to="/">
        <p>go back</p>
          </Link>
          
      <div className={styles.firstInformations}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
          width={200}
          height={400}
        />
        <ul>
          <h4>{movieInfo.title}</h4>
          <p>User score: {movieInfo.vote_average}</p>
          <h5>Overview</h5>
          <p>{movieInfo.overview}</p>
          <h6>Genres</h6>
          <p>nie wiem nie</p>
        </ul>
          </div>
          
          <div className={styles.additionalInformation}>
              <ul>
                  <Link><li></li></Link>
                  <Link><li></li></Link>
                  
              </ul>
          </div>
    </>
  );
};