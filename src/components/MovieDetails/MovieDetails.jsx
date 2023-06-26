import { useParams } from "react-router-dom"


export const MovieDetails = ({ movies }) => {
    const { id } = useParams();
    
    movies.map(movie => {
        if (movie.id === id) {
            console.log('G')
        }
        return null
    })

    
}