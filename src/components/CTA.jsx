import React from 'react';
import { Calendar } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="contacto" className="section cta-section">
      <div className="cta-bg"></div>
      <div className="container">
        <div className="cta-content glass">
          <h2 className="cta-title">¿Listo para operar como una empresa del futuro?</h2>
          <p className="cta-desc">
            Agenda una llamada de descubrimiento gratuita de 30 minutos. Analizaremos tu negocio y te mostraremos exactamente dónde la IA puede generar el mayor impacto inmediato.
          </p>
          <a href="#" className="btn btn-primary btn-lg cta-btn">
            <Calendar size={20} /> Agendar Llamada de Descubrimiento
          </a>
          <p className="cta-note">Sin compromisos. Solo valor puro para tu negocio.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
