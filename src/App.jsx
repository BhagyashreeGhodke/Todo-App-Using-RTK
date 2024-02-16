import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
    <h1>Todo List</h1>
    <AddTodo /> 
    <Todos />     
    </>
  )
}

export default App
