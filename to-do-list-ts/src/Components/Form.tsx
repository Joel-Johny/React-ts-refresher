import React from 'react'
import { Todo } from '../model'
import './style.css'

interface props{
    todoString:string
    setter:React.Dispatch<React.SetStateAction<string>>
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Form :React.FC<props> = ({todoString,setter,setTodos}) => {

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        if(todoString){
            setTodos((oldTodos)=>{
                return [...oldTodos,{id:Date.now(),name:todoString,isComplete:false}]
            })
            setter("")
        }
        
    }

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setter(e.target.value)
        // setter()
    }

  return (
    <div className='input__box'>
        <form  onSubmit={(e)=>handleSubmit(e)}>
            <input className='input' value={todoString} onChange={(e)=>handleInput(e)}/>
            <button>GO</button>
        </form>
    </div>
  )
}

export default Form