import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: state
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState(false)

  // Step 3: fetch function
  const fetchJoke = async () => {
    setLoading(true)

    try {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      )
      const data = await res.json()

      setJoke(data.joke)
    } catch (error) {
      setJoke("Failed to load joke")
    } finally {
      setLoading(false)
    }
  }

  // Step 2: run on mount
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      {/* Step 4: pass props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />

      {/* Step 5: pass function to button */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App