import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'utils/FetchMoviesCast';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const castPromise = fetchMoviesCast(movieId).then(resp => resp.cast);

  useEffect(() => {
    castPromise.then(resp => {
      return setCast([...resp]);
    });
  }, [castPromise]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
            alt={`${actor.name}`}
            width="90"
          />
          {actor.name}
          <p>character:{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
