import React, {useState, useRef, useEffect} from "react";
import "./Pages.css";
import Footer from '../components/Footer';
import { projects, categories } from './Projects';
import { useNavigate } from "react-router-dom";

const ITEM_WIDTH = 200;

const Work = () => {
  
  const navigate = useNavigate();
  const containerRefs = useRef({});
  const [mouseDown,setMouseDown] = useState(false);
  const [startX,setStartX] = useState(0);
  const [scrollX,setScrollX] = useState(0);

  const handleMouseDown = (e, category) => {
    setMouseDown(true);
    setStartX(e.clientX);
    setScrollX(containerRefs.current[category].scrollLeft);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };
  const handleMouseLeave = () => {
    setMouseDown(false);
  };
//scroll by dragging
  const handleMouseMove = (e, category) => {

    if(!mouseDown) return;
    e.preventDefault();
    const scrollAmount = (e.clientX - startX)*0.5;
    containerRefs.current[category].scrollLeft = scrollX - scrollAmount;
  };

//change to using arrows
// const [scrollPosition, setScrollPosition] = useState(0);
  
  // const handleScroll = (scrollAmount) => {
  //   const newScrollPosition = scrollPosition + scrollAmount;
  //   setScrollPosition(newScrollPosition);
  //   containerRef.current.scrollLeft = newScrollPosition;
  // }

  const handleCardClick = (projectIdname) => {
    navigate(`/${projectIdname}`);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if(hash){
        const section = document.getElementById(hash.substring(1));
        // if(section){
        //   section.scrollIntoView({behavior:'smooth', block:'start'});
        //   // window.scrollBy(0, -80);
        // }
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY; // Get the absolute position of the section
          window.scrollTo({ top: top - 50, behavior: 'smooth' }); // Adjust for header height
        }
        
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  },[]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(()=>{
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize',handleResize);
    return() => window.removeEventListener('resize', handleResize);
  },[]);

  const contentBoxStyle = (nProjects) => { //take in number of projects
    if (windowWidth <= 600){
      return {width: nProjects* 0.8*windowWidth};
    }
    else{
      return{width: nProjects*500};
    }
  }

  return(
      <div className="page">
        <div className="worktitle">
          Work
        </div>
        {categories.map(category => {
        const includedProjects = projects.filter(project => project.categories.includes(category));
        return(
          <div key={category} id={category.replace(/\s+/g, '\-')} >
            <div className='project-category'>{category}</div>
            <div className="container">
              <div className="inner-container" ref={el => (containerRefs.current[category] = el)} 
              onMouseDown={(e) => handleMouseDown(e,category)} 
              onMouseUp={handleMouseUp} 
              onMouseLeave={handleMouseLeave} 
              onMouseMove={(e)=>handleMouseMove(e,category)}
              style={{ cursor: (mouseDown) ? 'grabbing' : 'default' }}
              >
                <div className="content-box" style={contentBoxStyle(includedProjects.length)}>
                  {includedProjects.map(project => (
                    <div key={project.id} className="card"
                      onClick = {() => handleCardClick(project.idname)}
                    >
                      {project.media.endsWith('.mp4') ? (
                      <video className="project-media" autoPlay loop muted preload="auto" playsInline webkit-playsinline="true" poster={project.poster}>
                        <source src={project.media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      ) : (
                        <img className="project-media" src={project.media} alt={project.title} />
                      )}
                      <div className="project-title">{project.title}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="action-btns">
                <button onClick={()=>{handleScroll(-ITEM_WIDTH)}}>Scroll Left</button>
                <button onClick={()=>{handleScroll(ITEM_WIDTH)}}>Scroll Right</button>
              </div> */}
            </div>
          </div>
        )
      })}
      <div className="footer"/>  
      <Footer/>
    </div>
  );
};

export default Work;







