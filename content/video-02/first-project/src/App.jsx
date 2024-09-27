import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld' 
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/list'
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional'
import ListRender from './components/ListRender'
import SeuNome from './components/SeuNome'
import Saudacao from './components/saudacao'

function App() {
  const [count, setCount] = useState(0)

  const [nome, setNome] = useState()

  const name = 'Matheus'

  const newName = name.toUpperCase()

  const meusItens = ['React', 'Angular', 'JavaScript']

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
        <Evento/>
      </div>
      <Form/>
      <div>
        <h1>Renderização condicional</h1>
        <Condicional/>
      </div>
      <div>
        <h1>Renderização de listas</h1>
        <ListRender itens={meusItens}/>
        <ListRender itens={[]}/>
      </div>
      <div>
        <h1>State Lift</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
      </div>
    </>
  )
}

export default App
