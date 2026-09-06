import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    fetch('/api/code')
      .then(response  => response.json())
      
      .then(data => setJokes(data))
      .catch(error => console.error('Error fetching jokes:', error));
  }, [])
  return (
   <>
   <h1>Jokes</h1>
   <h1>{jokes.length}</h1>
   {jokes.map((joke, index) => (
    <div key={index}>
      <p>{joke.id}</p>
      <h2>{joke.title}</h2>
      <p>{joke.content}</p>
    </div>
   ))}

   
   
   </>
   
  )
}

export default App
