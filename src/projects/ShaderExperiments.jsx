import React from 'react';
import './../pages/Pages.css';
import {Scene,Scene2,Scene3} from './shaderExperimentFiles';

const ShaderExperiments = () => {
  return (
    
    <section className="projectpage">
      <div className="projecttitle">
        Shader Experiments
      </div>

      {/* Experiment 1 */}
      <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      1. Blue waves over a white sphere
      </div>
      <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div>
      <div className="shader-experiment" style={{height:'50vh'}}>
        <Scene />  
      </div>

      {/* Experiment 2 */}
      <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      2. Nine blue waves 
      </div>
      <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div>
      <div className="shader-experiment" style={{height:'70vh'}}>
        <Scene2 />  
      </div>

      {/* Experiment 3 */}
      <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      3. A hundred blue waves 
      </div>
      <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div>
      <div className="shader-experiment" style={{height:'60vh'}}>
        <Scene3 />  
      </div>
      
      <div className="footer"/>  
    </section>
    
  );
}

export default ShaderExperiments;