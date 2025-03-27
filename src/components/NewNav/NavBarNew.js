import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from "../../images/אנה גרקוב לוגו.png"

import { FaInstagram, FaWhatsapp, FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    const phoneNumber = "+972528412646";
    const message = "היי מאי ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const menuItems = ['קורס לק גל' ,'קורס אקריל','השתלמויות', 'שאלות תשובות', 'מי אני'];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span className={styles.buttonText}>אנה אני</span>
          <span className={styles.buttonTextHidden}>בפנים!</span>
        </button>
        
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/m.s_nails_artist/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaInstagram />
          </a>
          <a onClick={handleClick} className={styles.socialIcon}>
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {(isMenuOpen || isClosing) && windowWidth <= 850 && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.closeButton} onClick={toggleMenu}>
              <FaTimes />
            </div>
            <div className={styles.mobileMenuLogo}>
              <img src={logo} alt="מאי שושן לוגו"/>
            </div>
          </div>
          <div className={styles.mobileMenuContent}>
            {menuItems.map((item, index) => (
              <ScrollLink 
                key={index} 
                to={item} 
                smooth={true} 
                offset={-100}
                duration={700} 
                onClick={toggleMenu}
                className={styles.mobileMenuItem}
              >
                {item}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarNew;