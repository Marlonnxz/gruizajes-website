import './Services.css'
import { useState } from 'react'
import gruasIcon from '../assets/icons/gruas.png'
import camionesIcon from '../assets/icons/camiones-grua.png'
import elevacionIcon from '../assets/icons/equipos-de-elevacion.png'
import transporteIcon from '../assets/icons/vehiculos-de-transporte.png'


function Services() {
  const [activeSection, setActiveSection] = useState(null)

  const whatsapp = (servicio) =>
    `https://wa.me/573107860500?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20${encodeURIComponent(servicio)}.`

  // Datos de ejemplo de la flota (puedes reemplazar con tus fotos reales)
  const fleetData = {
    gruas: [
      { id: 1, name: "Grúa Móvil 25T", capacity: "25 toneladas", reach: "35m", image: "/api/placeholder/300/200", available: true },
      { id: 2, name: "Grúa Móvil 50T", capacity: "50 toneladas", reach: "45m", image: "/api/placeholder/300/200", available: true },
      { id: 3, name: "Grúa Móvil 80T", capacity: "80 toneladas", reach: "60m", image: "/api/placeholder/300/200", available: false },
      { id: 4, name: "Grúa Móvil 100T", capacity: "100 toneladas", reach: "70m", image: "/api/placeholder/300/200", available: true },
      { id: 5, name: "Grúa Móvil 130T", capacity: "130 toneladas", reach: "80m", image: "/api/placeholder/300/200", available: true },
    ],
    camiones: [
      { id: 1, name: "Camión Grúa 3T", capacity: "3 toneladas", platform: "5m", image: "/api/placeholder/300/200", available: true },
      { id: 2, name: "Camión Grúa 5T", capacity: "5 toneladas", platform: "6m", image: "/api/placeholder/300/200", available: true },
      { id: 3, name: "Camión Grúa 8T", capacity: "8 toneladas", platform: "7m", image: "/api/placeholder/300/200", available: false },
      { id: 4, name: "Camión Grúa 12T", capacity: "12 toneladas", platform: "8m", image: "/api/placeholder/300/200", available: true },
    ],
    elevacion: [
      { id: 1, name: "Plataforma Tijera 12m", height: "12 metros", capacity: "500kg", image: "/api/placeholder/300/200", available: true },
      { id: 2, name: "Plataforma Tijera 18m", height: "18 metros", capacity: "500kg", image: "/api/placeholder/300/200", available: true },
      { id: 3, name: "Canastilla 26m", height: "26 metros", capacity: "300kg", image: "/api/placeholder/300/200", available: true },
    ],
    transporte: [
      { id: 1, name: "Plataforma 20T", capacity: "20 toneladas", length: "12m", image: "/api/placeholder/300/200", available: true },
      { id: 2, name: "Cama Baja 40T", capacity: "40 toneladas", length: "15m", image: "/api/placeholder/300/200", available: false },
      { id: 3, name: "Cama Baja 60T", capacity: "60 toneladas", length: "18m", image: "/api/placeholder/300/200", available: true },
    ]
  }

  const handleServiceClick = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const renderFleetGallery = (fleetType, title) => {
    const fleet = fleetData[fleetType]
    return (
      <div className={`fleet-gallery ${activeSection === fleetType ? 'active' : ''}`}>
        <div className="gallery-header">
          <h3>🚛 Nuestra Flota - {title}</h3>
          <button 
            className="close-gallery"
            onClick={() => setActiveSection(null)}
          >
            ✕
          </button>
        </div>
        <div className="fleet-grid">
          {fleet.map(item => (
            <div key={item.id} className="fleet-card">
              <div className="fleet-image">
                <img src={item.image} alt={item.name} />
                <div className={`status-badge ${item.available ? 'available' : 'unavailable'}`}>
                  {item.available ? '✓ Disponible' : '⏰ En servicio'}
                </div>
              </div>
              <div className="fleet-info">
                <h4>{item.name}</h4>
                <div className="fleet-specs">
                  <span>📏 {item.capacity}</span>
                  {item.reach && <span>📐 {item.reach}</span>}
                  {item.platform && <span>🚛 {item.platform}</span>}
                  {item.height && <span>⬆️ {item.height}</span>}
                  {item.length && <span>📏 {item.length}</span>}
                </div>
                <div className="fleet-actions">
                  <a href="#contacto" className="btn-quote">Cotizar</a>
                  <a href={whatsapp(item.name)} target="_blank" rel="noreferrer" className="btn-whatsapp-mini">WhatsApp</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="servicios" className="services">
      {/* Portada original del mockup */}
      <div className="services-hero">
        <div className="services-hero-inner">
          <h2 className="services-title">Servicio de Grúas</h2>
          
          <div className="services-grid">
            <button className="service-card" onClick={() => handleServiceClick('gruas')}>
              <div className="service-icon-wrapper">
                <img src={gruasIcon} alt="Grúas" className="service-icon-img" />
              </div>
              <h3>Grúas</h3>
              <span className="fleet-count">5 equipos</span>
            </button>

            <button className="service-card" onClick={() => handleServiceClick('camiones')}>
              <div className="service-icon-wrapper">
                <img src={camionesIcon} alt="Camiones Grúa" className="service-icon-img" />
              </div>
              <h3>Camiones Grúa</h3>
              <span className="fleet-count">4 equipos</span>
            </button>

            <button className="service-card" onClick={() => handleServiceClick('elevacion')}>
              <div className="service-icon-wrapper">
                <img src={elevacionIcon} alt="Equipos de elevación" className="service-icon-img" />
              </div>
              <h3>Equipos de elevación</h3>
              <span className="fleet-count">3 equipos</span>
            </button>

            <button className="service-card" onClick={() => handleServiceClick('transporte')}>
              <div className="service-icon-wrapper">
                <img src={transporteIcon} alt="Vehículos de transporte" className="service-icon-img" />
              </div>
              <h3>Vehículos de Transporte</h3>
              <span className="fleet-count">3 equipos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Galerías de flota */}
      {renderFleetGallery('gruas', 'Grúas')}
      {renderFleetGallery('camiones', 'Camiones Grúa')}
      {renderFleetGallery('elevacion', 'Equipos de Elevación')}
      {renderFleetGallery('transporte', 'Vehículos de Transporte')}
    </section>
  )
}

export default Services
