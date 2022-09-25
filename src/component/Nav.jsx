import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

const Nav = () => {
  return (
    <div>
        <ul className='nav'>
            <li>
                <NavLink to="/" end replace={true}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" replace={true}>About</NavLink>
            </li>
            <li>
                <NavLink to="/services" replace={true}>
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" replace={true}>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav