import './Contact.css'
// IMPORTANTE: Importar la imagen de fondo
import contactBg from '../assets/imagen-fondo.jpg'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí integrarías tu servicio de envío (EmailJS, API, etc.)
    console.log('Formulario enviado');
    
    // Mostrar mensaje de éxito
    alert('¡Mensaje enviado correctamente! Nos contactaremos contigo pronto.');
  };

  const whatsappLink = "https://wa.me/573107860500?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20servicios%20de%20gr%C3%BAas%20en%20Sogamoso";

  return (
    <section id="contacto" className="contact">
      {/* Hero Section con diseño consistente */}
      <div className="contact-hero" style={{backgroundImage: `url(${contactBg})`}}>
        <div className="contact-hero-inner">
          <h2 className="contact-title">Contáctanos</h2>
          
          {/* Cards de métodos de contacto */}
          <div className="contact-methods">
            <div className="contact-method-card">
              <div className="method-icon">📝</div>
              <h3>Formulario</h3>
              <p>Para cotizaciones detalladas y consultas formales</p>
            </div>
            
            <div className="contact-method-card">
              <div className="method-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>Para respuestas inmediatas y emergencias 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de formulario y mapa */}
      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Formulario con glass morphism */}
            <div className="form-section">
              <div className="form-card">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">
                      <span className="form-icon">👤</span>
                      Nombre
                    </label>
                    <input type="text" id="nombre" name="nombre" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="telefono">
                      <span className="form-icon">📞</span>
                      Teléfono
                    </label>
                    <input type="tel" id="telefono" name="telefono" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <span className="form-icon">📧</span>
                      Correo Electrónico
                    </label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="mensaje">
                      <span className="form-icon">💬</span>
                      Mensaje
                    </label>
                    <textarea id="mensaje" name="mensaje" rows="4" required placeholder="Describe el servicio que necesitas..."></textarea>
                  </div>

                  <div className="form-buttons">
                    <button type="submit" className="btn-quote-main">
                      <span className="btn-icon">📋</span>
                      SOLICITAR COTIZACIÓN
                    </button>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-main"
                    >
                      <span className="btn-icon">📱</span>
                      EMERGENCIA 24/7
                    </a>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Información de contacto con glass morphism */}
            <div className="info-section">
              <div className="info-card">
                <h3>📍 Nuestra Ubicación</h3>
                <p>Cra. 2 #04-13, Chameza Mayor<br/>Nobsa, Boyacá, Colombia</p>
                
                <h3>🕐 Horario de Atención</h3>
                <p>Las 24 horas, los 7 días de la semana<br/>
                <strong>Emergencias disponibles siempre</strong></p>
                
                <h3>💳 Métodos de Pago</h3>
                <p>Efectivo • Transferencia bancaria<br/>PayPal • PSE</p>
                
                <h3>📱 Contacto Directo</h3>
                <p>
                  <strong>(+57) 310 786 0500</strong><br/>
                  GruizajesSAS@hotmail.com
                </p>
              </div>

              {/* Mapa con glass morphism */}
              <div className="map-card">
                <iframe 
                  src="https://www.google.com/maps?q=Cra.+2+%2304-13,+Chameza+Mayor,+Nobsa,+Boyac%C3%A1,+Colombia&hl=es&z=16&output=embed"
                  width="100%" 
                  height="300" 
                  style={{border: 0, borderRadius: '12px'}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Gruizajes - Cra. 2 #04-13, Chameza Mayor, Nobsa, Boyacá"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer minimalista */}
      <footer className="contact-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>GRUIZAJES S.A.S</h3>
              <p>Servicios de grúas y transporte especializado en Boyacá</p>
            </div>
            <div className="footer-contact">
              <p>© 2024 Gruizajes S.A.S - Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Contáctanos por WhatsApp"
      >
        <span className="whatsapp-icon">📱</span>
        <span className="whatsapp-text">WhatsApp</span>
      </a>
    </section>
  )
}

export default Contact
