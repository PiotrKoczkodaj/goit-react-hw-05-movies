import axios from "axios";

export const fetchTrendingMovies = async () => {
    
    const response = await axios('https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd').then(resp => { return resp.data }).catch(error => console.log(error));
    
    return response
}



