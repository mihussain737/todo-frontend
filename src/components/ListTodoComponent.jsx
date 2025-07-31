import React, { useEffect, useState } from 'react'
import { completeTodo, deleteTodoById, getAllTodos,inCompleteTodo } from '../service/TodoService';
import { useNavigate } from 'react-router-dom';

const ListTodoComponent = () => {

    useEffect(()=>{
          listTodos();
    },[])

    function listTodos(){
     getAllTodos().then((response)=>{
          setTodos(response.data);
     }).catch(error=>{
          console.log(error)
     })
    }

const[todos,setTodos]=useState([]);
const navigate=useNavigate();

function addNewTodo(){
     navigate('/add-todo')
}

function updateTodo(id){
     console.log(id)
     navigate(`/update-todo/${id}`)
}

function deleteTodo(todoId){
     console.log(todoId)
     deleteTodoById(todoId).then((response)=>{
          listTodos()
     }).catch(error=>{
          console.error(error)
     })
}

function markCompleteTodo(todoId){
     completeTodo(todoId).then((response)=>{
          listTodos()
     }).catch(error=>{
          console.error(error)
     })
}

function unmarkCompleteTodo(todoId){
     inCompleteTodo(todoId).then((response)=>{
          listTodos()
     }).catch(error=>{
          console.error(error)
     })
}

  return (
    <div className='container'>
          {/* <h2 className='text-center text-success'>List of Todos</h2> */}
          <br />
          <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
          <div>
               <table className='table table-striped table-bordered table-success'>
                    <thead>
                         <tr>
                              <th>Todo Title</th>
                              <th>Todo Description</th>
                              <th>Todo Completed</th>
                              <th className='text-center'>Actions</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              todos.map(todo=>
                                   <tr key={todo.id}>
                                        <td>{todo.title}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.completed ? 'YES':'NO'}</td>
                                        <td>
                                             <button className='btn btn-info' onClick={()=>updateTodo(todo.id)}>Update</button>
                                             <button className='btn btn-danger ms-2' onClick={()=>deleteTodo(todo.id)}>Delete</button>
                                             <button className='btn btn-success ms-2' onClick={()=>markCompleteTodo(todo.id)}>Complete</button>
                                             <button className='btn btn-warning ms-2' onClick={()=>unmarkCompleteTodo(todo.id)}>In-Complete</button>
                                        </td>
                                   </tr>
                              )
                         }
                    </tbody>
                    
               </table>

          </div>
    </div>
  )
}

export default ListTodoComponent