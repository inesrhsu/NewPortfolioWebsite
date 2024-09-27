import { NavLink } from "react-router-dom"
//import injectSheet from 'react-jss'
import './../index.css'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <NavLink to="/home" className="icon">
            <p>INÉS RODRÍGUEZ HSU</p>
        </NavLink>
        <nav className="navbar">
          <NavLink to="/home" className="item">
            <p>Home</p>
          </NavLink>
          <NavLink to="/about" className="item">
            <p>About</p>
          </NavLink>
          <NavLink to="/work" className="item">
            <p>Work</p>
          </NavLink>
          <NavLink to="/contact" className="item">
            <p>Contact</p>
          </NavLink>
        </nav>
    </header>
  )
}
 
export default Navbar
