import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="hero-subtitle">Más de 10 años de experiencia en izajes</p>
        <h1 className="hero-title">
          Izajes para Proyectos Complejos. Su Carga Segura a Cualquier Altura.
        </h1>
        <p className="hero-description">
          Ofrecemos la grúa correcta para su obra, entregada a tiempo y operada por 
          expertos. Garantizamos seguridad y eficiencia en cada movimiento.
        </p>
        <button className="btn-solicitar">Solicitar Cotización</button>
      </div>
    </section>
  )
}

export default Hero
