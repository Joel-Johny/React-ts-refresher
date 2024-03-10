import { useState } from 'react'
import {FC} from "react"
import { Todo } from './model'
import './App.css'
import Form from "./Components/Form"
import Result from './Components/Result'

const App : FC=()=> {

  const [todoString,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<Todo[]>([])
  console.log("Current Value : ",todoString,"List : ",todos)
  return (
    <>
      <h1>To Do list with React DND</h1>
      <Form todoString={todoString} setter={setTodo} setTodos={setTodos}/>
      <Result todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
