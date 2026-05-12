import React from 'react';
import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      title: "Enfoque en Resultados",
      description: "No implementamos IA por moda. Nuestro éxito se mide en horas ahorradas, ventas generadas y costos reducidos para tu empresa.",
      icon: <Target size={24} />
    },
    {
      title: "Soluciones a Medida",
      description: "Entendemos que cada negocio es único. Diseñamos agentes y flujos que se adaptan a tu forma de trabajar, no al revés.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "IA Práctica, no teórica",
      description: "Dejamos la ciencia ficción para las películas. Entregamos herramientas útiles y funcionales que tu equipo puede usar hoy.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Acompañamiento Continuo",
      description: "Tu tecnología evoluciona contigo. Proveemos soporte continuo, actualizaciones y entrenamiento constante para tu equipo.",
      icon: <Users size={24} />
    }
  ];

  return (
    <section id="beneficios" className="section benefits-section">
      <div className="container">
        <div className="benefits-layout">
          <div className="benefits-text">
            <h2 className="section-title text-left">¿Por qué Soluciones <span className="text-gradient">Digitales HN</span>?</h2>
            <p className="benefits-lead">
              Nuestra misión es democratizar el acceso a la inteligencia artificial empresarial de alto nivel.
            </p>
            <p className="benefits-desc">
              Nos asociamos contigo como tu equipo técnico extendido. Analizamos profundamente tu industria para encontrar las ventajas competitivas ocultas que solo la IA puede desbloquear.
            </p>
            <a href="#contacto" className="btn btn-outline" style={{marginTop: '2rem'}}>
              Habla con un Experto
            </a>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card glass">
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
