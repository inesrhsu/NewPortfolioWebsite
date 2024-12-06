//this is the image gallery for project images, not for the photography page
import './../index.css';
import "./../pages/Pages.css";
import React, {useState, useRef, useEffect} from "react";

const ImageGallery = ({images})=>{
    //SET UP PHOTO SLIDESHOW
    const [photoIndex, setPhotoIndex] = useState(null);
  
    const openModal = (index) => {
      setPhotoIndex(index);
      document.body.style.overflow = 'hidden';
    };
      
    const closeModal = () => {
      setPhotoIndex(null);
      document.body.style.overflow = 'auto';
    };
  
    const nextImage = () => {
      setPhotoIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    };
  
    const prevImage = () => {
      setPhotoIndex((prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
      );
    };
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (photoIndex === null) return; // modal is not open
  
        if (e.key === 'ArrowLeft') {
          prevImage(); 
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'Escape') {
          closeModal(); 
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      // Cleanup event listener when the component unmounts
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [photoIndex]); 
  
    return (
      // <div className="image-gallery">
        <div className="project-photogrid">
          {images.map((photo, index)=>(
              <div className="grid-item" key={photo.id}>
              <div className="overlay">
                <img className="photograph"  src={photo.src} alt={photo.alt}
                onClick={()=>openModal(index)}/>
              </div>
            </div>
          ))}
        {/* </div> */}
        {photoIndex !== null && (
          <div className="modal">
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <button className="prev" onClick={prevImage}>
              &#10094;
            </button>
            <button className="next" onClick={nextImage}>
              &#10095;
            </button>
            <div className="modal-image-container">   
              <img
                src={images[photoIndex].src}
                alt={images[photoIndex].alt}
                className="modal-image"
              />
            </div>
          </div>
        )}
  
      </div>
    );
  
  };

export default ImageGallery;