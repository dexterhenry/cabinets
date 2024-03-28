import "./App.css"
import { Movies } from "./assets/components/Movies"
import { useMovies } from "./assets/hooks/useMovies"
import { useSearch } from "./assets/hooks/useSearch"

import debounce from "just-debounce-it"
import { useCallback } from "react"

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const debauncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 300),
    []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSeacrh = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debauncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Cabinets search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleSeacrh}
            placeholder='OVD, W3015, 1824....'
            value={search}
          />
          <button type='submit'>Search </button>
        </form>
      </header>
      <main>{loading ? <p> Loading ... </p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
