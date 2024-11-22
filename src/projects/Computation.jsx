import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const Computation = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
      Computer Vision and Computer Graphics Projects
      </div>
      <div className="projectdescription">
        <div className="projectsubtitle" style={{paddingBottom: 15}}>
            Detection of Lines in Images
        </div>
        &#9702; I implemented an image line detector using computer vision techniques 
        using Python<br />
        &#9702;  Wrote Gaussian and Sobel filter convolutions and non-maximum suppression 
        to find edge intensity and orientation, and applied Hough Transform to compute 
        and output lines detected in images
        <br /><br />
        <div className="projectsubtitle" style={{paddingBottom: 15}}>
            Augmented Reality Object Tracking and Replacement Application
        </div>
        &bull;  I developed an AR application to detect and track an object at any image 
        angle and replace it by a desired image<br />
        &bull;  I achieved this by computing image homographies using a RANSAC algorithm 
        and using BRIEF image descriptor to match image features
        <br /><br />
        <div className="projectsubtitle" style={{paddingBottom: 15}}>
            3D Reconstruction from 2D Images
        </div>
        &bull;  I wrote program to reconstruct a 3D environment given two 2D images by 
        implementing the eight-point algorithm, computing epipolar correspondences, 
        the essential matrix and triangulation<br />
        &bull;  Rectified images, to obtain depth and disparity maps to create a dense 
        3D reconstruction<br />
        &bull;  Implemented camera pose estimation algorithm given 2D image points and 
        corresponding 3D points
        <br /><br />
        <div className="projectsubtitle" style={{paddingBottom: 15}}>
            Scene Recognition
        </div>
        &bull;  I developed image classification scene recognition program using a 
        bag-of-words algorithm by extracting filter responses of a large dataset 
        of images, sampling image points using K-means clustering, computing 
        visual word maps and histograms of image features and training image set 
        on feature histograms to identify image types<br />
        &bull;  Compared performance of random points and Harris corner detector points 
        sampling implementations 
        <br /><br />
        <div className="projectsubtitle" style={{paddingBottom: 15}}>
            Convolutional Neural Network to Convert Handwriting to Text
        </div>
        &bull;  Implemented convolutional neural network program, computing forward 
        propagation and back propagation using softmax and sigmoid activation 
        functions to convert handwritten text images to text<br />
        &bull;  Trained neural network on handwritten text image data set using one 
        hidden layer with 64 hidden units for 30 epochs, and used network to parse 
        text in new images
        <br /><br />
        <div className="projectsubtitle" style={{paddingBottom: 15}}>
            Video Tracking Alignment
        </div>
        &bull;  Wrote program to track an object with a bounding box throughout a video, 
        including objects moving away from or closer to the camera and passing behind 
        other objects<br />
        &bull;  Implemented Lucas-Kanade forward additive alignment algorithm with 
        translation as well as with full-affine transformation for video tracking 
        (additive increment to warp parameters each frame)<br />
        &bull;  Optimized computational performance with implementation of Matthews-Baker 
        inverse compositional alignment, gradient descent algorithm with affine 
        transformation (with direct warp update per frame)
        <br /><br />
        <div className="projectsubtitle" style={{paddingBottom: 15}}>
            Rasterizer
        </div>
        &bull;  Implemented rasterizer in software (C++) including line and triangle 
        rasterization, depth testing and blending, perspective correct attribute 
        interpolation, mip-mapping and supersampling
        <br /><br />
        <div className="projectsubtitle" style={{paddingBottom: 15}}>
            Geometric Mesh Editing
        </div>
        &bull;  Developed interactive mesh editing of triangular meshes, implementing 
        vertex, edge and face operations such as edge splitting, edge and face 
        collapse, face extrude, edge and vertex dissolve <br />
        &bull;  Implemented mesh triangulation, Catmull-Clark mesh subdivision, and 
        isometric remeshing operations
        <br /><br />
        I completed these projects as part of the Computer Vision and Computer 
        Graphics courses at Carnegie Mellon University. 
        <br /><br />
      </div>
      <div className="footer"/>  
    </section>
    
  );
}

export default Computation;
