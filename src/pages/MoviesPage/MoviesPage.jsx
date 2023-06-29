export const MoviesPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Search</button>
        </form>
    )
}