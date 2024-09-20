import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const name = 'Matheus'

  const newName = name.toUpperCase()

  return (
    <>
      <h1>My firts project in React</h1>
      <p>Olá, {newName}</p>
      <br/>
      <p>Soma: { 2 + 2 }</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Alterando o JSX
        </p>
      </div>
    </>
  )
}

export default App
