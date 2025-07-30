import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import TodoComponent from './components/TodoComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
            {/* //http://localhost:8080 */}
            <Route path='/' element={<ListTodoComponent/>}></Route>

            {/* //http://localhost:8080/todos */}
            <Route path='/todos' element={<ListTodoComponent/>}></Route>

            {/* //http://localhost:8080/add-todo */}
            <Route path='/add-todo' element={<TodoComponent/>}></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
      
    </>
  )
}

export default App
