import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
//import injectSheet from 'react-jss'
import './../index.css';
import './Navbar.css';

const Navbar = () => {

  const location = useLocation();
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight/2){
        setShowName(true);
      } else {
        setShowName(false);
      }
    };

    if (location.pathname === "/home") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); //run useEffect when location pathname changes

  return (
    <header>
      { showName && (
        <NavLink to="/home" className="icon">
          <p>INÉS RODRÍGUEZ HSU</p>
        </NavLink> 
      )}
        
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
