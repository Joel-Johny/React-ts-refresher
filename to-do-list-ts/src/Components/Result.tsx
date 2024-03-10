import React from 'react'
import { Todo } from '../model'
import TodoCard from './TodoCard'
import './style.css'
interface Props{
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const Result:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='container'>
        <div className="complete">
            <h2>Complete</h2>
            {todos.map((todo)=>{
                return <TodoCard currentTodo={todo}  alltodos={todos} alltodosSetter={setTodos} key={todo.id}/>
            })}
        </div>

        <div className="incomplete remove">
        <h2>InComplete</h2>

        {todos.map((todo)=>{
                return <TodoCard currentTodo={todo}  alltodos={todos} alltodosSetter={setTodos} key={todo.id}/>
            })}
        </div>
        
      
    </div>
  )
}

export default Result