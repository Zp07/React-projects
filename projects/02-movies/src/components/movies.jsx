import PropTypes from 'prop-types'

ListOfMovies.propTypes = {
    movies:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title:PropTypes.string,
            year: PropTypes.string.isRequired,
            poster: PropTypes.string.isRequired
        })
    ).isRequired
}
Movies.propTypes = {
    movies:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title:PropTypes.string,
            year: PropTypes.string.isRequired,
            poster: PropTypes.string.isRequired
        })
    ).isRequired
}

function ListOfMovies ({ movies}) {
    return(
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title}/>
                    </li>
                ))
            }
        </ul>
    )
}

function NoMovieResults () {
    return (
        <p>No se encontraron peliculas para esta busqueda</p>
    )
}

export function Movies ({movies}) {
    const hasMovies = movies?.length > 0 

    return(
        hasMovies
            ? <ListOfMovies  movies={movies} />            
            : <NoMovieResults />
        )
}