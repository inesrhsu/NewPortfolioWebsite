import React, {useState, useRef, useEffect} from "react";
import "./Pages.css";
import { projects, categories } from './Projects';
import { useNavigate } from "react-router-dom";


const Photography = () => {
    const [featured, setFeatured] = useState(false);
    const [sf, setSF] = useState(true);
    const [bcn, setBCN] = useState(false);
    const [sanctiPetri, setSanctiPetri] = useState(false);
    const [calella, setCalella] = useState(false);
    const [menorca, setMenorca] = useState(false);
    const [taipei, setTaipei] = useState(false);
    const [peru, setPeru] = useState(true);
    const [tainan, setTainan] = useState(false);
    const [nyc, setNYC] = useState(false);
    const [miami, setMiami] = useState(false);
    const [pgh, setPGH] = useState(false);
  
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

      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("featured")}>
            Featured
        </div>
        {featured &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}

      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("san francisco")}>
            San Francisco, 2024
        </div>
        {sf &&(
          <div className="photo-grid">
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW1.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW2.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW3.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW4.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW5.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW6.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW7.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW8.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW9.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW10.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW11.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW12.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW13.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW14.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW15.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW16.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW17.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW18.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW19.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW20.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW21.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW22.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW23.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW24.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW25.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW26.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW27.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW28.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW29.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW30.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW31.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW32.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoodsBW33.jpg' alt="Muir Woods B&W"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods2.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods3.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods4.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods5.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods1.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods6.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods7.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods8.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods9.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods10.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods11.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods12.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods13.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods14.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods15.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods16.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods17.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods18.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods19.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods20.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods21.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods22.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods23.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods24.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods25.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods26.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods27.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods28.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods29.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/muirWoods30.jpg' alt="Muir Woods"></img>
            <img className="photograph" src='/photo/sanFrancisco/sanFrancisco1.jpg' alt="San Francisco"></img>
            <img className="photograph" src='/photo/sanFrancisco/sanFrancisco2.jpg' alt="San Francisco"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito1.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito2.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito3.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito4.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito5.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito6.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito7.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito8.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito9.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito10.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/sausalito11.jpg' alt="Sausalito"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf1.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf2.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf3.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf4.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf5.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf6.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf7.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf8.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf9.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf10.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf11.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf12.jpg' alt="Barcelona San Francisco double exposure"></img>
            <img className="photograph" src='/photo/sanFrancisco/bcnSf13.jpg' alt="Barcelona San Francisco double exposure"></img>

          </div>
        )}
      </section>
      
      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("barcelona")}>
            Barcelona, 2024
        </div>
        {bcn &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}
      
      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("sancti petri")}>
            Sancti Petri, 2024
        </div>
        {sanctiPetri &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}
      
      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("calella")}>
            Calella de Palafrugell, 2024
        </div>
        {calella &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}
      
      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("menorca")}>
            Menorca, 2024
        </div>
        {menorca &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}

      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("taipei")}>
            臺北 (Taipei), 九份 (Jiufen), 2024
        </div>
        {taipei &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}

      <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("peru")}>
            Peru, 2024
        </div>
        {peru &&(
          <div className="photo-grid">
            <img className="photograph" src='/photo/peru/arequipaColca1.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca2.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca3.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca4.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca5.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca6.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca7.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca8.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca9.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca10.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca11.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca12.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca13.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca14.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca15.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca16.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca17.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca18.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca19.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca20.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca21.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca22.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca23.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca24.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca25.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca26.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca27.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/arequipaColca28.jpg' alt="Arequipa y Colca"></img>
            <img className="photograph" src='/photo/peru/colca1.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca2.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca3.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca4.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca5.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca6.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca7.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca8.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca9.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca10.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca11.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca12.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca13.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca14.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca15.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca16.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca17.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca18.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca19.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca20.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca21.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca22.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca23.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca24.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca25.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca26.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/colca27.jpg' alt="Colca"></img>
            <img className="photograph" src='/photo/peru/titicaca1.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca2.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca3.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca4.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca5.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca6.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca7.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca8.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca9.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca10.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca11.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca12.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca13.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca14.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca15.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca16.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca17.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca18.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca19.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca20.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca21.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca22.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca23.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/titicaca24.jpg' alt="Lago Titicaca"></img>
            <img className="photograph" src='/photo/peru/tren1.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren2.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren3.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren4.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren5.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren6.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren7.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren8.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren9.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren10.jpg' alt="Tren de Arequipa a Cuzco"></img>
            {/* <img className="photograph" src='/photo/peru/tren11.jpg' alt="Tren de Arequipa a Cuzco"></img> */}
            <img className="photograph" src='/photo/peru/tren12.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren13.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren14.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren15.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren16.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren17.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren18.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren19.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren20.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren21.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren22.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/tren23.jpg' alt="Tren de Arequipa a Cuzco"></img>
            <img className="photograph" src='/photo/peru/machuPicchu1.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu2.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu3.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu4.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu5.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu6.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu7.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu8.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu9.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu10.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu11.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu12.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu13.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu14.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu15.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/machuPicchu16.jpg' alt="Machu Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb1.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb2.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb3.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb4.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb5.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb6.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb7.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb8.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb9.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb10.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb11.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb12.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb13.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb14.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb15.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb16.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuClimb17.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuBajada1.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuBajada2.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuBajada3.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuBajada4.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuBajada5.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuBajada6.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuBajada7.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuBajada8.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/huaynaPicchuBajada9.jpg' alt="Huayna Picchu"></img>
            <img className="photograph" src='/photo/peru/valleSagrado1.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado2.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado3.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado4.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado5.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado6.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado7.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado8.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado9.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado10.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado11.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado12.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado13.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado14.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado15.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado16.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado17.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado18.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado19.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado20.jpg' alt="Valle Sagrado"></img>
            <img className="photograph" src='/photo/peru/valleSagrado21.jpg' alt="Valle Sagrado"></img>
          </div>
        )}
      </section>

      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("tainan")}>
            臺北 (Taipei), 臺南 (Tainan), 2023
        </div>
        {tainan &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}
      
      {/* <section className="photo-category">
        <div className="subtitle" onClick={() => toggleSection("new york city")}>
            New York City, 2022
        </div>
        {nyc &&(
          <div className="photo-grid">
            Hello
          </div>
        )}
      </section> */}

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
    </div>
  );
};

export default Photography;







