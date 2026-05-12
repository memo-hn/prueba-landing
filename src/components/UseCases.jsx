import React from 'react';
import './UseCases.css';

const UseCases = () => {
  const cases = [
    {
      industry: "E-Commerce",
      problem: "Altos tiempos de respuesta en atención al cliente fuera de horario laboral.",
      solution: "Agente conversacional integrado en WhatsApp que resuelve el 80% de las consultas, rastrea pedidos y recomienda productos.",
      result: "Aumento del 35% en conversión de ventas nocturnas y reducción del 50% en tickets de soporte."
    },
    {
      industry: "Bienes Raíces",
      problem: "Proceso manual lento para calificar prospectos y agendar visitas.",
      solution: "Asistente telefónico de voz (Voice AI) que llama a los leads en menos de 5 minutos, los califica y agenda reuniones en el calendario del agente.",
      result: "Incremento del 300% en tasa de contacto efectivo y 40 horas ahorradas a la semana."
    },
    {
      industry: "Agencias B2B",
      problem: "Desperdicio de tiempo redactando propuestas comerciales y buscando datos de prospectos.",
      solution: "Flujo automatizado que extrae información de LinkedIn, analiza la web de la empresa y genera borradores de propuestas hiper-personalizadas en segundos.",
      result: "Reducción del tiempo de creación de propuestas de 2 horas a 5 minutos."
    }
  ];

  return (
    <section id="casos-uso" className="section use-cases-section">
      <div className="container">
        <h2 className="section-title">Casos de Éxito</h2>
        <p className="section-subtitle">
          Descubre cómo estamos transformando industrias enteras con la implementación estratégica de IA.
        </p>

        <div className="cases-grid">
          {cases.map((useCase, index) => (
            <div key={index} className="case-card glass">
              <div className="case-industry">{useCase.industry}</div>
              <div className="case-body">
                <div className="case-block">
                  <span className="case-label text-error">El Problema</span>
                  <p>{useCase.problem}</p>
                </div>
                <div className="case-block">
                  <span className="case-label text-primary">La Solución AI</span>
                  <p>{useCase.solution}</p>
                </div>
                <div className="case-block result-block">
                  <span className="case-label text-success">El Resultado</span>
                  <p className="case-result">{useCase.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
