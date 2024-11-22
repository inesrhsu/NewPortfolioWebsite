import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
//import injectSheet from 'react-jss'
import './../index.css';
import './Navbar.css';

const Navbar = ({ scrollOffset }) => {

  const location = useLocation();
  const [showName, setShowName] = useState(false);

  useEffect(() => {
      // console.log("in useEffect");
      if (location.pathname === "/"){
        setShowName(scrollOffset >= 0.15);
        // console.log("scrollOffset>=0.25",scrollOffset>=0.25);
      } else {
        setShowName(true);
      }
      // console.log("showName", showName);
      // console.log("location.pathname !== /", (location.pathname !== "/"));
  }, [location.pathname, scrollOffset]); //run useEffect when location pathname changes

  return (

      <>
        { (showName || location.pathname !== "/") ? (
          <header>
            <NavLink to="/" className="icon">
              <p>INÉS RODRÍGUEZ HSU</p>
            </NavLink> 
            <nav className="navbar">
              <NavLink to="/" className="item">
                <p>Home</p>
              </NavLink>
              <NavLink to="/about" className="item">
                <p>About</p>
              </NavLink>
              <NavLink to="/work" className="item">
                <p>Work</p>
              </NavLink>
              <NavLink to="/photography" className="item">
                <p>Photography</p>
              </NavLink>
            </nav>
          </header>
       ) : (
        <header style={{boxShadow:'none'}} >
          <NavLink to="/" className="icon">
            <p> </p>
          </NavLink> 
          <nav className="navbar" style={{alignItems:'space-between'}}>
            <NavLink to="/" className="item">
              <p>Home</p>
            </NavLink>
            <NavLink to="/about" className="item">
              <p>About</p>
            </NavLink>
            <NavLink to="/work" className="item">
              <p>Work</p>
            </NavLink>
          </nav>
        </header>
      )}
      </>
  )
}
 
export default Navbar
