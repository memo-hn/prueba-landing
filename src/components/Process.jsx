import React from 'react';
import { Search, PenTool, Code, Repeat } from 'lucide-react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      title: "Diagnóstico",
      description: "Analizamos tus operaciones actuales para encontrar cuellos de botella y oportunidades.",
      icon: <Search size={24} />
    },
    {
      title: "Diseño de Solución",
      description: "Arquitectamos un sistema a medida usando los modelos y herramientas más eficientes.",
      icon: <PenTool size={24} />
    },
    {
      title: "Implementación",
      description: "Desarrollo e integración ágil, conectando las IA con tu ecosistema tecnológico.",
      icon: <Code size={24} />
    },
    {
      title: "Optimización",
      description: "Monitoreo continuo y refinamiento del modelo para maximizar el ROI.",
      icon: <Repeat size={24} />
    }
  ];

  return (
    <section id="proceso" className="section process-section">
      <div className="container">
        <h2 className="section-title">Nuestro Proceso</h2>
        <p className="section-subtitle">
          Una metodología probada para integrar IA sin fricción en tu negocio.
        </p>
        
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">0{index + 1}</div>
              <div className="step-icon glass">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
