import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/movies'
import { useState } from 'react'



function App() {
  const {movies} = useMovies()
  const [query, setQuery] = useState('')

  const hanldeSumbmit = (event) => {
    event.preventDefault()
    console.log({query})
}
  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={hanldeSumbmit}>
          <input onChange={handleChange} value={query}  name='query' placeholder='Avengers, Star Wars, The Matrix'/>
          <button type='sumbmit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
   
export default App
