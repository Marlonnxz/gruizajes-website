import './Contact.css'
import contactBg from '../assets/imagen-fondo.jpg'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const telefono = formData.get('telefono');
    const email = formData.get('email');
    const mensaje = formData.get('mensaje');
    
    console.log('Formulario enviado:', { nombre, telefono, email, mensaje });
    alert('¡Mensaje enviado correctamente! Nos contactaremos contigo pronto.');
    e.target.reset();
  };

  const whatsappLink = "https://wa.me/573107866599?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20servicios%20de%20gr%C3%BAas%20en%20Sogamoso";

  return (
    <section id="contacto" className="contact">
      <div className="contact-hero" style={{backgroundImage: `url(${contactBg})`}}>
        <div className="contact-hero-inner">
          <h2 className="contact-title">Contáctanos</h2>
          <p className="contact-subtitle">
            Solicita una cotización o comunícate directamente con nuestro equipo
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="form-section">
                <div className="form-card">
                  <h3 className="form-title">📝 Solicitar Cotización</h3>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="nombre">
                        <span className="form-icon">👤</span>
                        Nombre
                      </label>
                      <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre completo" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="telefono">
                        <span className="form-icon">📞</span>
                        Teléfono
                      </label>
                      <input type="tel" id="telefono" name="telefono" required placeholder="310 123 4567" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">
                        <span className="form-icon">📧</span>
                        Correo Electrónico
                      </label>
                      <input type="email" id="email" name="email" required placeholder="tucorreo@ejemplo.com" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="mensaje">
                        <span className="form-icon">💬</span>
                        Describe el servicio que necesitas
                      </label>
                      <textarea 
                        id="mensaje" 
                        name="mensaje" 
                        rows="4" 
                        required 
                        placeholder="Tipo de grúa, ubicación, fecha estimada, carga a movilizar..."
                      ></textarea>
                    </div>

                    <div className="form-buttons">
                      <button type="submit" className="btn-quote-main">
                        <span className="btn-icon">📋</span>
                        ENVIAR SOLICITUD
                      </button>
                      <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp-main"
                      >
                        <span className="btn-icon">📱</span>
                        WHATSAPP DIRECTO
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="info-section">
                <div className="info-card">
                  <div className="info-item">
                    <h3>📍 Ubicación</h3>
                    <p>Cra. 2 #04-13, Chameza Mayor<br/>Nobsa, Boyacá, Colombia</p>
                  </div>

                  <div className="info-item">
                    <h3>🕐 Horario de Atención</h3>
                    <p>
                      <strong>Lunes a Viernes</strong><br/>
                      7:00 AM - 12:30 PM<br/>
                      2:00 PM - 5:00 PM
                    </p>
                    <p className="emergency-note">
                      <strong>⚠️ Emergencias 24/7</strong><br/>
                      Disponibles fuera de horario
                    </p>
                  </div>
                  
                  <div className="info-item">
                    <h3>📱 Contacto Directo</h3>
                    <p>
                      <strong>WhatsApp:</strong><br/>
                      <a href="https://wa.me/573107866599" target="_blank" rel="noopener noreferrer">
                        (+57) 310 786 6599
                      </a>
                    </p>
                    <p>
                      <strong>Email:</strong><br/>
                      <a href="mailto:gruizajesheavylifting@gmail.com">
                        gruizajesheavylifting@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className="info-item">
                    <h3>💳 Métodos de Pago</h3>
                    <p>Efectivo • Transferencia bancaria<br/>PayPal • PSE</p>
                  </div>
                </div>

                <div className="map-card">
                  <iframe 
                    src="https://www.google.com/maps?q=Cra.+2+%2304-13,+Chameza+Mayor,+Nobsa,+Boyac%C3%A1,+Colombia&hl=es&z=16&output=embed"
                    width="100%" 
                    height="300" 
                    style={{border: 0, borderRadius: '12px'}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Gruizajes"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>GRUIZAJES S.A.S</h3>
              <p>Servicios de grúas y transporte especializado en Boyacá</p>
            </div>
            <div className="footer-contact">
              <p>© 2024 Gruizajes S.A.S - Todos los derechos reservados</p>
              <p>
                <a href="mailto:gruizajesheavylifting@gmail.com">gruizajesheavylifting@gmail.com</a> • 
                <a href="tel:+573107866599"> (+57) 310 786 6599</a>
              </p>
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
        <span className="whatsapp-icon">📱</span>
        <span className="whatsapp-text">WhatsApp</span>
      </a>
    </section>
  )
}

export default Contact
