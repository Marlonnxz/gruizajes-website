import './Contact.css'
import contactBg from '../assets/imagen-fondo.jpg'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí integrarías tu servicio de envío (EmailJS, API, etc.)
    console.log('Formulario enviado');
  };

  const whatsappLink = "https://wa.me/573107860500?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20servicios%20de%20gr%C3%BAas%20en%20Sogamoso";

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-hero" style={{backgroundImage: `url(${contactBg})`}}>
        <div className="contact-overlay">
          <div className="contact-container">
            <h2 className="contact-title">Contáctenos</h2>
            
            <div className="contact-content">
              <div className="contact-form-wrapper">
                <p className="contact-description">
                  <strong>Elige cómo prefieres contactarnos:</strong><br/>
                  📝 <strong>Formulario:</strong> Para cotizaciones detalladas y consultas formales<br/>
                  📱 <strong>WhatsApp:</strong> Para respuestas inmediatas y emergencias 24/7
                </p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre :</label>
                    <input type="text" id="nombre" name="nombre" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono :</label>
                    <input type="tel" id="telefono" name="telefono" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico :</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje :</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                  </div>

                  <div className="form-buttons">
                    <button type="submit" className="btn-enviar">SOLICITAR COTIZACIÓN</button>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <span className="whatsapp-icon">📱</span>
                      EMERGENCIA 24/7
                    </a>
                  </div>
                </form>
              </div>
              
              <div className="contact-map">
                <iframe 
                  src="https://www.google.com/maps?q=Cra.+2+%2304-13,+Chameza+Mayor,+Nobsa,+Boyac%C3%A1,+Colombia&hl=es&z=16&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
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
      
      <footer className="contact-footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>GRUIZAJES</h3>
            <p>Servicio de grúas económicas, grúas cama baja, grúas plataforma, grúas y plataformas en Sogamoso y Boyacá.</p>
            <p>Consulta su teléfono de grúa aquí. ¡Contáctenos!</p>
            <div className="footer-phone">
              <span className="phone-icon">📞</span>
            </div>
          </div>
          
          <div className="footer-section">
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">🏠</span>
                <span>Contáctenos</span>
              </div>
              <p>cra 2 #04-13, Chameza Mayor, Nobsa, Boyacá, Colombia</p>
              <p>GruizajesSAS@hotmail.com</p>
              <p>(+57) 3107860500</p>
            </div>
          </div>
          
          <div className="footer-section">
            <div className="attention-info">
              <div className="contact-item">
                <span className="icon">👤</span>
                <span>Atención</span>
              </div>
              <p>Atendemos LAS 24 HORAS</p>
              <p>Aceptamos pagos en efectivo y paypal</p>
            </div>
          </div>
        </div>
      </footer>

      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Contáctanos por WhatsApp"
      >
        📱
      </a>
    </section>
  )
}

export default Contact
