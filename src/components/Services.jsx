import './Services.css'

function Services() {
  const services = [
    {
      icon: "🏗️",
      title: "Grúas para Construcción",
      description: "Equipos modernos y certificados para obras civiles, montaje de estructuras y más."
    },
    {
      icon: "🏭",
      title: "Grúas Industriales",
      description: "Soluciones para movimiento de maquinaria pesada, mantenimiento y montajes industriales."
    },
    {
      icon: "✅",
      title: "Asesoría",
      description: "Apoyo técnico y logístico en cada etapa de su proyecto"
    }
  ]

  return (
    <section className="services" id="servicios">
      <div className="services-header">
        <h2>Soluciones Integrales para su proyecto</h2>
        <p>Desde el alquiler del equipo hasta la planificación logística completa, estamos para apoyarlo.</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="btn-service">Solicitar Información</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
