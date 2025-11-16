import './Services.css'
import { useState, useRef } from 'react'
import gruasIcon from '../assets/icons/gruas.png'
import camionesIcon from '../assets/icons/camiones-grua.png'
import elevacionIcon from '../assets/icons/equipos-de-elevacion.png'
import transporteIcon from '../assets/icons/vehiculos-de-transporte.png'

// Importar imágenes de grúas desde fleet/gruas
import gruaGMK6300L from '../assets/fleet/gruas/GRUA-GROVE-GMK6300L.png'
import gruaTMS800 from '../assets/fleet/gruas/GRUA-GROVE_TMS800.png'
import gruaLinkBelt from '../assets/fleet/gruas/GRUA-LINK-BELT-RTC_8065.png'
import gruaRT160 from '../assets/fleet/gruas/GRUA-RT-160.png'
import gruaRT530 from '../assets/fleet/gruas/GRUA-GROVE-RT-530DXL.png'
import gruaRT528 from '../assets/fleet/gruas/GRUA-GROVE-RT-528C.png'
import gruaSAC1600 from '../assets/fleet/gruas/GRUA-SAC1600S.png'
import gruaPH122 from '../assets/fleet/gruas/GRUA-P_H-CENTURY-122.png'
import gruaKobelco from '../assets/fleet/gruas/GRUA-KOBELCO-RK-70M.png'
import gruaGroveAP415 from '../assets/fleet/gruas/GRUA-GROVE-AP415.png'

// Importar imágenes de camiones grúa desde fleet/camiones
import camionStinger12T from '../assets/fleet/camiones/CAMION-GRUA-TIPO-STINGER-12TONELADAS.png'
import camionStinger15T from '../assets/fleet/camiones/CAMION-GRUA-TIPO-STINGER-15TONELADAS.png'


function Services() {
  const [activeSection, setActiveSection] = useState(null)
  
  const gruasRef = useRef(null)
  const camionesRef = useRef(null)
  const elevacionRef = useRef(null)
  const transporteRef = useRef(null)

  const whatsapp = (servicio) =>
    `https://wa.me/573107866599?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20${encodeURIComponent(servicio)}.`

  const scrollToSection = (targetRef, sectionName) => {
    if (!targetRef.current) return

    window.scrollTo({
      top: window.pageYOffset,
      behavior: 'auto'
    })

    setTimeout(() => {
      const element = targetRef.current
      const rect = element.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const targetTop = rect.top + scrollTop - 100

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      })
    }, 250)
  }

  const fleetData = {
    gruas: [
      { 
        id: 1, 
        name: "Grúa Grove GMK6300L", 
        capacity: "300 toneladas",
        reach: "80m",
        height: "120m",
        type: "Todo terreno",
        image: gruaGMK6300L
      },
      { 
        id: 2, 
        name: "Grúa SAC1600S SANY", 
        capacity: "160 toneladas",
        reach: "73m",
        height: "101m",
        type: "Todo terreno",
        image: gruaSAC1600
      },
      { 
        id: 3, 
        name: "Grúa Grove TMS800E", 
        capacity: "80 toneladas",
        reach: "39m",
        height: "41m",
        type: "Telescópica móvil",
        image: gruaTMS800
      },
      { 
        id: 4, 
        name: "Grúa Link Belt RTC 8065", 
        capacity: "65 toneladas",
        reach: "35m",
        height: "38m",
        type: "Todo terreno",
        image: gruaLinkBelt
      },
      { 
        id: 5, 
        name: "Grúa Terex RT 160", 
        capacity: "60 toneladas",
        reach: "35m",
        height: "57m",
        type: "Todo terreno",
        image: gruaRT160
      },
      { 
        id: 6, 
        name: "Grúa Grove RT 530 DXL", 
        capacity: "30 toneladas",
        reach: "27m",
        height: "30m",
        type: "Todo terreno",
        image: gruaRT530
      },
      { 
        id: 7, 
        name: "Grúa Grove RT 528C", 
        capacity: "28 toneladas",
        reach: "21m",
        height: "24m",
        type: "Todo terreno",
        image: gruaRT528
      },
      { 
        id: 8, 
        name: "Grúa P&H Century 122", 
        capacity: "22 toneladas",
        reach: "19m",
        height: "22m",
        type: "Telescópica móvil",
        image: gruaPH122
      },
      { 
        id: 9, 
        name: "Grúa Grove AP 415", 
        capacity: "15 toneladas",
        reach: "12.5m",
        height: "19m",
        type: "Industrial pick & carry",
        image: gruaGroveAP415
      },
      { 
        id: 10, 
        name: "Grúa Kobelco RK 70M", 
        capacity: "7 toneladas",
        reach: "21m",
        height: "22.6m",
        type: "Todo terreno compacta",
        image: gruaKobelco
      },
    ],
    camiones: [
      { 
        id: 1, 
        name: "Camión Grúa Stinger", 
        capacity: "15 toneladas",
        reach: "18m",
        height: "22m",
        type: "Boom truck montado",
        image: camionStinger15T
      },
      { 
        id: 2, 
        name: "Camión Grúa Stinger", 
        capacity: "12 toneladas",
        reach: "14.5m",
        height: "18m",
        type: "Boom truck montado",
        image: camionStinger12T
      },
    ],
    elevacion: [
      { id: 1, name: "Plataforma Tijera 12m", height: "12 metros", capacity: "500kg", image: "/api/placeholder/300/200" },
      { id: 2, name: "Plataforma Tijera 18m", height: "18 metros", capacity: "500kg", image: "/api/placeholder/300/200" },
      { id: 3, name: "Canastilla 26m", height: "26 metros", capacity: "300kg", image: "/api/placeholder/300/200" },
    ],
    transporte: [
      { id: 1, name: "Plataforma 20T", capacity: "20 toneladas", length: "12m", image: "/api/placeholder/300/200" },
      { id: 2, name: "Cama Baja 40T", capacity: "40 toneladas", length: "15m", image: "/api/placeholder/300/200" },
      { id: 3, name: "Cama Baja 60T", capacity: "60 toneladas", length: "18m", image: "/api/placeholder/300/200" },
    ]
  }

  const handleServiceClick = (section) => {
    if (activeSection === section) {
      setActiveSection(null)
      return
    }

    setActiveSection(section)
    
    const refMap = {
      gruas: gruasRef,
      camiones: camionesRef,
      elevacion: elevacionRef,
      transporte: transporteRef
    }

    const targetRef = refMap[section]
    if (targetRef) {
      scrollToSection(targetRef, section)
    }
  }

  const handleQuoteClick = (e, vehicleName) => {
    e.preventDefault()
    e.stopPropagation()
    
    setTimeout(() => {
      const contactSection = document.getElementById('contacto')
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  const renderFleetGallery = (fleetType, title, ref) => {
    const fleet = fleetData[fleetType]
    return (
      <div 
        ref={ref}
        className={`fleet-gallery ${activeSection === fleetType ? 'active' : ''}`}
        data-section={fleetType}
      >
        <div className="gallery-header">
          <h3>🚛 Nuestra Flota - {title}</h3>
          <button 
            className="close-gallery"
            onClick={() => setActiveSection(null)}
            type="button"
          >
            ✕
          </button>
        </div>
        <div className="fleet-grid">
          {fleet.map(item => (
            <div key={item.id} className="fleet-card">
              <div className="fleet-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="fleet-info">
                <h4>{item.name}</h4>
                <div className="fleet-specs">
                  <span>⚖️ {item.capacity}</span>
                  {item.reach && <span>📐 Alcance: {item.reach}</span>}
                  {item.height && <span>⬆️ Altura: {item.height}</span>}
                  {item.type && <span>🏗️ {item.type}</span>}
                  {item.platform && <span>🚛 {item.platform}</span>}
                  {item.length && <span>📏 {item.length}</span>}
                </div>
                <div className="fleet-actions">
                  <button 
                    className="btn-quote"
                    onClick={(e) => handleQuoteClick(e, item.name)}
                    type="button"
                  >
                    Cotizar
                  </button>
                  <a 
                    href={whatsapp(item.name)} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-whatsapp-mini"
                    onClick={(e) => e.stopPropagation()}
                  >
                    WhatsApp
                  </a>
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
      <div className="services-hero">
        <div className="services-hero-inner">
          <h2 className="services-title">Servicio de Grúas</h2>
          
          <div className="services-grid">
            <button 
              className={`service-card ${activeSection === 'gruas' ? 'active' : ''}`}
              onClick={() => handleServiceClick('gruas')}
              type="button"
            >
              <div className="service-icon-wrapper">
                <img src={gruasIcon} alt="Grúas" className="service-icon-img" />
              </div>
              <h3>Grúas</h3>
            </button>

            <button 
              className={`service-card ${activeSection === 'camiones' ? 'active' : ''}`}
              onClick={() => handleServiceClick('camiones')}
              type="button"
            >
              <div className="service-icon-wrapper">
                <img src={camionesIcon} alt="Camiones Grúa" className="service-icon-img" />
              </div>
              <h3>Camiones Grúa</h3>
            </button>

            <button 
              className={`service-card ${activeSection === 'elevacion' ? 'active' : ''}`}
              onClick={() => handleServiceClick('elevacion')}
              type="button"
            >
              <div className="service-icon-wrapper">
                <img src={elevacionIcon} alt="Equipos de elevación" className="service-icon-img" />
              </div>
              <h3>Equipos de elevación</h3>
            </button>

            <button 
              className={`service-card ${activeSection === 'transporte' ? 'active' : ''}`}
              onClick={() => handleServiceClick('transporte')}
              type="button"
            >
              <div className="service-icon-wrapper">
                <img src={transporteIcon} alt="Vehículos de transporte" className="service-icon-img" />
              </div>
              <h3>Vehículos de Transporte</h3>
            </button>
          </div>
        </div>
      </div>

      {renderFleetGallery('gruas', 'Grúas', gruasRef)}
      {renderFleetGallery('camiones', 'Camiones Grúa', camionesRef)}
      {renderFleetGallery('elevacion', 'Equipos de Elevación', elevacionRef)}
      {renderFleetGallery('transporte', 'Vehículos de Transporte', transporteRef)}
    </section>
  )
}

export default Services
