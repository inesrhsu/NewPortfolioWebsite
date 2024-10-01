import React, {useState, useRef} from "react";
import "./Pages.css";
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

  const handleMouseMove = (e, category) => {

    if(!mouseDown) return;
    e.preventDefault();
    const scrollAmount = (e.clientX - startX)*0.5;
    containerRefs.current[category].scrollLeft = scrollX - scrollAmount;
  };

  const handleCardClick = (projectIdname) => {
    navigate(`/${projectIdname}`);
  };

  return(
      <div className="page">
        <div className="title">
          Work
       </div>
        {categories.map(category => {
        const includedProjects = projects.filter(project => project.categories.includes(category));
        return(
          <div key={category}>
            <div className='project-category'>{category}</div>
            <div className="container">
              <div className="inner-container" ref={el => (containerRefs.current[category] = el)} 
              onMouseDown={(e) => handleMouseDown(e,category)} 
              onMouseUp={handleMouseUp} 
              onMouseLeave={handleMouseLeave} 
              onMouseMove={(e)=>handleMouseMove(e,category)}
              style={{ cursor: (mouseDown) ? 'grabbing' : 'default' }}
              >
                <div className="content-box">
                  {includedProjects.map(project => (
                    <div key={project.id} className="card"
                      onClick = {() => handleCardClick(project.idname)}
                    >
                      {project.media.endsWith('.mp4') ? (
                      <video className="project-media" autoPlay loop muted preload="auto">
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
    </div>
  );
};

export default Work;



// const [scrollPosition, setScrollPosition] = useState(0);
  
  // const handleScroll = (scrollAmount) => {
  //   const newScrollPosition = scrollPosition + scrollAmount;
  //   setScrollPosition(newScrollPosition);
  //   containerRef.current.scrollLeft = newScrollPosition;
  // }



