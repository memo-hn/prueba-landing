import React from 'react';
import { BrainCircuit, Globe, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/logo.png" alt="Soluciones Digitales HN Logo" className="logo-img" />
              <span className="logo-text" style={{fontSize: '1.2rem'}}>Soluciones <span className="text-gradient">Digitales HN</span></span>
            </a>
            <p className="footer-desc">
              Transformando operaciones empresariales mediante inteligencia artificial práctica y enfocada en el retorno de inversión.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Website"><Globe size={20} /></a>
              <a href="#" aria-label="Messages"><MessageCircle size={20} /></a>
              <a href="#" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Soluciones</h4>
            <ul>
              <li><a href="#servicios">Automatizaciones</a></li>
              <li><a href="#servicios">Agentes Inteligentes</a></li>
              <li><a href="#servicios">Consultoría IA</a></li>
              <li><a href="#servicios">Integraciones</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#proceso">Metodología</a></li>
              <li><a href="#casos-uso">Casos de Éxito</a></li>
              <li><a href="#beneficios">Por qué nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos de Servicio</a></li>
              <li><a href="#">Aviso Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Soluciones Digitales HN. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
