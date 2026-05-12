import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container hero-content">
        <div className="badge animate-fade-up">
          <Sparkles size={16} className="badge-icon" />
          <span>La Revolución Inteligente</span>
        </div>
        
        <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Escala tu negocio con <br />
          <span className="text-gradient">Agentes de IA y Automatización</span>
        </h1>
        
        <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Implementamos soluciones de inteligencia artificial diseñadas específicamente 
          para optimizar operaciones, reducir costos y multiplicar tus ventas sin fricción.
        </p>
        
        <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a href="#contacto" className="btn btn-primary btn-lg">
            Inicia tu Transformación <ArrowRight size={20} />
          </a>
          <a href="#servicios" className="btn btn-outline btn-lg">
            Explorar Soluciones
          </a>
        </div>
        
        <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="stat">
            <span className="stat-value">10x</span>
            <span className="stat-label">Eficiencia Operativa</span>
          </div>
          <div className="stat">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Disponibilidad</span>
          </div>
          <div className="stat">
            <span className="stat-value">-40%</span>
            <span className="stat-label">Costos Reducidos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
