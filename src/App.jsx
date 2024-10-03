import { useState } from 'react'
import Garage from './components/List_w3s'
import DobroNumeros from './components/List_ex_1'
import ListaDeFrutas from './components/List_ex_2'
import MyForm from './components/Form_w3s'
import RegistrationForm from './components/Form_ex'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Lista</h2>
      <h3> Exemplo - W3School</h3>
      <Garage/>


      <hr />
      <h3> Exemplo - 1</h3>
      <DobroNumeros/>



      <hr />
      <h3> Exemplo - 2</h3>
      <ListaDeFrutas/>

      
      <h2>Form</h2>

      <hr />
      <h3> Exemplo - W3School</h3>
      <MyForm/>

      <br />
      <hr />
      <h3> Exemplo</h3>
      <RegistrationForm />
    </>
  )
}

export default App
