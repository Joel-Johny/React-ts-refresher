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

  const [edit,setEdit]=React.useState<boolean>(false)
  const [editText,setEditText]=React.useState<string>(currentTodo.name)

  const handleDelete = ()=>{
    alltodosSetter((oldValues)=>{
      const newList=oldValues.filter((todo)=>{
        return currentTodo.id!==todo.id
      })
      return newList
    })
  }
  const handleDone = () => {
  alltodosSetter((oldValues) => {
    return oldValues.map((todo) => {
      if (todo.id === currentTodo.id) {
        return { ...todo, isComplete: !todo.isComplete }; // Toggle isComplete
      } else {
        return todo;  // Return unchanged
      }
    });
  });
};

const handleSubmit=(e)=>{
  e.preventDefault()
  alltodosSetter((oldValues)=>{
    return oldValues.map((todo)=>{
      if(todo.id==currentTodo.id)
        todo.name=editText
      return todo
    })
  })
  setEdit(!edit)

}

  
  return (
    <form className='todos__single' onSubmit={(e)=>handleSubmit(e)}>
      {
        edit?
        <>
          <input type="text" className="todos__single--text" value={editText} onChange={(e)=>setEditText(e.target.value)}/>
        </>:
        <>
          {(currentTodo.isComplete)?<span className='todos__single--text strike'>{currentTodo.name}</span>:<span className='todos__single--text'>{currentTodo.name}</span>}
        </>
      }
        
        <div className="icon">
          <span onClick={()=>setEdit(!edit)}><MdEdit /></span>
          <span onClick={handleDelete}><MdDelete /></span>
          <span onClick={handleDone}><FaCheckCircle /></span>
        </div>
    </form>
  )
}

export default TodoCard