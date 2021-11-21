import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../redux/actions";

const AddTodo=()=>{
    const [todo, setTodo]=useState('');

    const dispatch= useDispatch();
    const todos=useSelector(state => state.todos);

    const addTodo= ()=>{
        let newTodo ={
            id: todos.length,
            name: todo,
            complete: false
        }
        dispatch(addTodoAction(newTodo));
        setTodo('');
    };


    return(
        <div>
            <input 
            className='form-control mt-2 mb-2'
            type='text' 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)}
            />
            <button className='btn btn-primary' onClick={() => addTodo()}>AGREGAR A LA LISTA</button>
        </div>
    )
};


export default AddTodo;