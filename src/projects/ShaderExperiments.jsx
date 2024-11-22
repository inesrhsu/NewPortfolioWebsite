import React from 'react';
import './../pages/Pages.css';
import {WaveScene1,WaveScene2,WaveScene3, WaveScene4, WaveScene5, WaveScene6, WaveScene7, Lollipops} from './shaderExperimentFiles';

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
        <WaveScene1 />  
      </div>

      {/* Experiment 2 */}
      <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      2. Nine blue waves 
      </div>
      <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div>
      <div className="shader-experiment" style={{height:'70vh'}}>
        <WaveScene2 />  
      </div>

      {/* Experiment 3 */}
      <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      3. A hundred blue waves 
      </div>
      <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div>
      <div className="shader-experiment" style={{height:'60vh'}}>
        <WaveScene3 />  
      </div>

      {/* Experiment 4 */}
      <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      4. More blue waves
      </div>
      {/* <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div> */}
      <div className="shader-experiment" style={{height:'60vh'}}>
        <WaveScene4 />  
      </div>

         {/* Experiment 5 */}
         <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      5. Striped waves
      </div>
      <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div>
      <div className="shader-experiment" style={{height:'60vh'}}>
        <WaveScene5 />  
      </div>

      {/* Experiment 6 */}
      <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      6. One wavy ball and two wavy cubes
      </div>
      <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div>
      <div className="shader-experiment" style={{height:'60vh'}}>
        <WaveScene6 />  
      </div>

      {/* Experiment 7 */}
      <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      7. Three wavy lollipops
      </div>
      <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div>
      <div className="shader-experiment" style={{height:'60vh'}}>
        <WaveScene7 />  
      </div>

      {/* Experiment 8 */}
      <div className="projectsubtitle" style={{paddingBottom:'0'}}>
      8. Three wavy lollipops with color picker
      </div>
      <div className="projectdescription"style={{paddingTop:5, textIndent:26}}>
          (Drag to rotate)
      </div>
      <div className="shader-experiment" style={{height:'60vh'}}>
        <Lollipops />  
      </div>
      
      <div className="footer"/>  
    </section>

    
    
  );
}

export default ShaderExperiments;