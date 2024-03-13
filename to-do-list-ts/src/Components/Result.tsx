import React from 'react'
import { Todo } from '../model'
import TodoCard from './TodoCard'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import './style.css'
interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Result: React.FC<Props> = ({ todos, setTodos }) => {

    const handleDragEnd = () => {
        console.log("Something was dragged")
    };


    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className='container'>
                <Droppable droppableId="complete">{(provided) => (

                    <>
                        <div className="complete" {...provided.droppableProps} ref={provided.innerRef}>
                            <h2>Complete</h2>
                            {todos.map((todo, index) => {
                                console.log("Hi")
                                return <TodoCard currentTodo={todo} alltodos={todos} alltodosSetter={setTodos} key={todo.id} index={index} />

                            })}
                            {provided.placeholder}

                        </div>

                    </>

                )}</Droppable>

                <Droppable droppableId="incomplete">{(provided) => (

                    <>
                        <div className="incomplete remove" {...provided.droppableProps} ref={provided.innerRef}>
                            <h2>Incomplete</h2>
                            {provided.placeholder}

                        </div>

                    </>

                )}</Droppable>
            </div>



        </DragDropContext>

    )
}

export default Result