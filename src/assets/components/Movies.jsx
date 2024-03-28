function ListOfMovies({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(({ id, title, year, poster, price }) => (
        <li className='movie' key={id}>
          <h3>{title}</h3>
          <img src={poster} alt={title} />
          <p> {year}</p>
          <b> ${price}</b>
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResults() {
  return <p> No results</p>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
