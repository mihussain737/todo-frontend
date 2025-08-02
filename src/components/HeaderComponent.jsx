import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn } from './AuthService'

const HeaderComponent = () => {
    const isAuth=isUserLoggedIn();
  return (
    <div>
          <header>
               <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
                    <div>
                     <a className="navbar-brand" href="http://localhost:3000">Todo Application</a>
                    </div>
                    <div className='collapse navbar-collapse'>
                      <ul className='navbar-nav'>
                        {
                          isAuth &&  <li className='nav-item'>
                          <NavLink to="/todos" className="nav-link">Todos</NavLink>
                        </li>
                        }
                      </ul>
                    </div>
                    <ul className='navbar-nav'>
                      {
                        !isAuth && <li className='nav-item'>
                          <NavLink to="/register" className="nav-link">Register</NavLink>
                        </li>
                      }{
                        !isAuth && <li className='nav-item'>
                          <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                      }
                        
                      </ul>
               </nav>
          </header>
    </div>
  )
}

export default HeaderComponent