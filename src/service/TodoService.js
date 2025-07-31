import axios from "axios";

const BASE_REST_API_URL='http://localhost:8080/api/todos';

export const getAllTodos=()=> axios.get(BASE_REST_API_URL); 
export const saveTodo=(todo)=> axios.post(BASE_REST_API_URL,todo); 
export const getTodo=(todoId)=> axios.get(BASE_REST_API_URL+'/'+todoId); 
export const updateTodoById=(todoId,todo)=> axios.put(BASE_REST_API_URL+'/'+todoId , todo)
export const deleteById=(todoId)=> axios.delete(BASE_REST_API_URL+'/'+todoId)