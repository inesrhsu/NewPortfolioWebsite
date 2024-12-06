import React, {useState, useRef, useEffect} from "react";
import "./Pages.css";
import { projects, categories } from './Projects';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import { featuredPhotoArr, sanFranciscoPhotoArr, peruPhotoArr, barcelonaPhotoArr, 
    calellaPhotoArr, menorcaPhotoArr, sanctiPetriPhotoArr, tainanPhotoArr, 
    taipeiPhotoArr, newYorkCityPhotoArr } from './../photography';

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
    <div className="image-gallery">
      <div className="photo-grid">
        {images.map((photo, index)=>(
            <div className="grid-item" key={photo.id}>
            <div className="overlay">
              <img className="photograph"  src={photo.src} alt={photo.alt}
              onClick={()=>openModal(index)}/>
            </div>
          </div>
        ))}
      </div>
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

const Photography = () => {
    const [featured, setFeatured] = useState(true);
    const [sf, setSF] = useState(false);
    const [bcn, setBCN] = useState(false);
    const [sanctiPetri, setSanctiPetri] = useState(false);
    const [calella, setCalella] = useState(false);
    const [menorca, setMenorca] = useState(false);
    const [taipei, setTaipei] = useState(false);
    const [peru, setPeru] = useState(true);
    const [tainan, setTainan] = useState(false);
    const [nyc, setNYC] = useState(false);
    // const [miami, setMiami] = useState(false);
    // const [pgh, setPGH] = useState(false);
  
    const toggleSection = (section) => {
        if (section == "featured"){
            setFeatured(!featured);
        } 
        else if (section == "san francisco"){
            setSF(!sf);
        }
        else if (section == "barcelona"){
            setBCN(!bcn);
        }
        else if (section == "sancti petri"){
            setSanctiPetri(!sanctiPetri);
        }
        else if (section == "calella"){
            setCalella(!calella);
        }
        else if (section == "menorca"){
            setMenorca(!menorca);
        }
        else if (section == "taipei"){
            setTaipei(!taipei);
        }
        else if (section == "peru"){
            setPeru(!peru);
        }
        else if (section == "tainan"){
            setTainan(!tainan);
        }
        else if (section == "new york city"){
            setNYC(!nyc);
        }
        else if (section == "miami"){
            setMiami(!miami);
        }
        else if (section == "pittsburgh"){
            setPGH(!pgh);
        }
    };


  return(
    <div className="page">
      <div className="worktitle">
          Photography
      </div>

      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("featured")}>
            Featured 
            {featured ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {featured &&(
          <ImageGallery images={featuredPhotoArr}/>
        )}
      </section>

      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("san francisco")}>
          San Francisco
            {sf ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {sf &&(
          <ImageGallery images={sanFranciscoPhotoArr}/>
        )}
      </section>
      
      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("barcelona")}>
          Barcelona
            {bcn ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {bcn &&(
          <ImageGallery images={barcelonaPhotoArr}/>
        )}
      </section>
      
      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("sancti petri")}>
          Sancti Petri
            {sanctiPetri ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {sanctiPetri &&(
          <ImageGallery images={sanctiPetriPhotoArr}/>
        )}
      </section>
      
      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("calella")}>
          Calella de Palafrugell
            {calella ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {calella &&(
          <ImageGallery images={calellaPhotoArr}/>
        )}
      </section>
      
      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("menorca")}>
          Menorca
            {menorca ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {menorca &&(
          <ImageGallery images={menorcaPhotoArr}/>
        )}
      </section>
      
      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("taipei")}>
          臺北 (Taipei), 九份 (Jiufen)
            {taipei ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {taipei &&(
          <ImageGallery images={taipeiPhotoArr}/>
        )}
      </section>

      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("peru")}>
          Peru
            {peru ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {peru &&(
          <ImageGallery images={peruPhotoArr}/>
        )}
      </section>

      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("tainan")}>
          臺南 (Tainan)
            {tainan ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {tainan &&(
          <ImageGallery images={tainanPhotoArr}/>
        )}
      </section>

      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("new york city")}>
          New York City
            {nyc ?(<span className="material-symbols-outlined">keyboard_arrow_up</span>) :
            (<span className="material-symbols-outlined">keyboard_arrow_down</span>)}
        </div>
        {nyc &&(
          <ImageGallery images={newYorkCityPhotoArr}/>
        )}
      </section>
      

      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("miami")}>
            Miami, 2022
        </div>
        {miami &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}

      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("pittsburgh")}>
            Pittsburgh, 2022
        </div>
        {pgh &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}
        
      <div className="footer"/>  
      <Footer/>
    </div>
  );
};

export default Photography;







