import React, { useState, useEffect } from 'react';
import { BrainCircuit, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Casos de Uso', href: '#casos-uso' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled glass' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="Soluciones Digitales HN Logo" className="logo-img" />
          <span className="logo-text" style={{fontSize: '1.2rem'}}>Soluciones <span className="text-gradient">Digitales HN</span></span>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn-primary btn-sm">Agendar Demo</a>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open glass' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contacto" 
              className="btn btn-primary w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Demo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
