import React from 'react'
import './style.css'
import { Todo } from '../model'
import { MdEdit ,MdDelete} from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

interface Props{
    currentTodo:Todo,
    alltodos:Todo[],
    alltodosSetter:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard:React.FC<Props> = ({currentTodo,alltodos,alltodosSetter}) => {
  return (
    <form className='todos__single'>
        <span className='todos__single--text'>{currentTodo.name}</span>
        <div className="icon">
          <MdEdit />
          <MdDelete />
          <FaCheckCircle />
        </div>
    </form>
  )
}

export default TodoCard