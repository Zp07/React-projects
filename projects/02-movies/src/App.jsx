import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/movies'
import './App.css'

function App() {
  const { movies } = useMovies()
  const [ query, setQuery ] = useState('')

  const hanldeSumbmit = ( event ) => {
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
        <form className='form' onSubmit={ hanldeSumbmit }>
          <input 
          onChange={ handleChange } 
          value={ query }  
          name='query' 
          placeholder='Search'/>
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
