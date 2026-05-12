import React from 'react';
import { Bot, Zap, LineChart, Network } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Automatizaciones con IA",
      description: "Elimina tareas manuales repetitivas. Conectamos tus herramientas para crear flujos de trabajo inteligentes que ahorran cientos de horas mensuales.",
      icon: <Zap size={32} />,
      delay: "0.1s"
    },
    {
      title: "Agentes de IA Personalizados",
      description: "Asistentes virtuales entrenados con tus datos. Responden clientes, califican leads y asisten a tu equipo 24/7 con memoria y contexto.",
      icon: <Bot size={32} />,
      delay: "0.2s"
    },
    {
      title: "Consultoría Estratégica",
      description: "Auditoria profunda de tus procesos actuales para identificar las áreas con mayor retorno de inversión potencial mediante la aplicación de IA.",
      icon: <LineChart size={32} />,
      delay: "0.3s"
    },
    {
      title: "Integración de Sistemas",
      description: "Arquitectura y desarrollo de soluciones complejas conectando LLMs (GPT-4, Claude) con tus bases de datos y software propietario.",
      icon: <Network size={32} />,
      delay: "0.4s"
    }
  ];

  return (
    <section id="servicios" className="section">
      <div className="container">
        <h2 className="section-title">Soluciones Inteligentes</h2>
        <p className="section-subtitle">
          Transformamos la complejidad de la inteligencia artificial en resultados de negocio medibles y escalables.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card glass animate-fade-up" 
              style={{ animationDelay: service.delay }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
