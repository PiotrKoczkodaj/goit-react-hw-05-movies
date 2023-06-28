import axios from 'axios';

export const fetchMoviesInfo = async id => {
  const response = axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd`
    )
    .then(resp => {
      return resp;
    })
    .catch(error => {
      console.log(error);
    });
  return response;
};
