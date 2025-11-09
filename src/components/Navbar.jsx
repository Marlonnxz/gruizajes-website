import './Navbar.css'
import logo from '../assets/logo-gruizajes.png'

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Gruizajes" className="logo-img" />
        <span className="logo-text">GRUIZAJES S.A.S</span>
      </div>
      
      <ul className="navbar-menu">
        <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Inicio</a></li>
        <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>Servicios</a></li>
        <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>Contacto</a></li>
      </ul>
      
      <button className="btn-cotizar" onClick={() => scrollToSection('contacto')}>Solicitar Cotización</button>
    </nav>
  )
}

export default Navbar
