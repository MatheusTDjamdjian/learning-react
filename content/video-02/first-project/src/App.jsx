import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld' 

function App() {
  const [count, setCount] = useState(0)

  const name = 'Matheus'

  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  return (
    <>
      <h1>My firts project in React</h1>
      <p>Olá, {newName}</p>
      <br/>
      <p>Soma: {sum(1, 2)}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Alterando o JSX
        </p>
      </div>
      <HelloWorld/>
    </>
  )
}

export default App
