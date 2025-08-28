import React from 'react';
import './css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">Alt i Høyde Praksis 2025</h4>
          <p className="footer-text">
            Utviklet med ❤️ av IT-studenter fra UiA
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Samarbeid</h4>
          <div className="footer-links">
            <a href="https://www.altihoyde.no" target="_blank" rel="noopener noreferrer" className="footer-link">
              Alt i Høyde AS
            </a>
            <a href="https://www.uia.no" target="_blank" rel="noopener noreferrer" className="footer-link">
              Universitetet i Agder
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Prosjekt Info</h4>
          <p className="footer-text">
            🚀 Fullstack webutvikling<br/>
            🎯 React & Node.js<br/>
            ✨ Moderne design
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          &copy; 2025 Alt i Høyde AS | Praksisprosjekt utviklet av UiA studenter | Alle rettigheter reservert
        </p>
      </div>
    </footer>
  );
};

export default Footer;
