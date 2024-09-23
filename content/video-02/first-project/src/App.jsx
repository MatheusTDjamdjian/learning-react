import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld' 
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/list'
import Evento from './components/Evento'

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
      <h3>Testando CSS</h3>
      <div>
        <p>Props:</p> {/* Teste de Props */}
        < SayMyName nome ="Matheus" />
        < Pessoa nome="Rodrigo" idade="28" profissao="progamador" foto="https://via.placeholder.com/150"/>
      </div>
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
      <List/>
      <HelloWorld/>
      <div>
        <h1>Testando Eventos</h1>
        <Evento numero="1"/>
        <Evento numero="2"/>
      </div>
    </>
  )
}

export default App
