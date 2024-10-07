import './../index.css';
import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="footer-title"> Contact me: </div>
            {/* <div className="footer-text">  */}
               
              <a href='mailto:inesrohsu@gmail.com'> 
                <div className="footer-text">
                    <span className="material-symbols-outlined">mail</span>
                    inesrohsu@gmail.com
                </div>
              </a>
            {/* </div> */}
            
        </footer>
    )   
}

export default Footer;