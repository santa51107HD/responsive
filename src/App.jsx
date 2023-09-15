import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const menuRef = useRef(null);

  /*Esta parte es para el despliegue de las imagenes*/

  const toggleLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(!isLightboxOpen);
    console.log("imagen")
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  /* Aqui acaba */

  const toggleMenu = () => {
    // Detener la propagación del evento para que no llegue al documento y que no se cierre el menu debido al closeMenu
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    console.log("toggleMenu")
  };

  const closeMenu = (event) => {
    if (isMenuOpen && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      console.log("closeMenu")
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className='header' id="inicio">
        <img
          src="../iconos/bx-menu-alt-right.svg"
          className={`hamburger`}
          onClick={toggleMenu}
          //Alt, si no carga la imagen se muestra esto
          alt="Hamburger Menu"
        />
        <nav
          className={`menu-navegacion ${isMenuOpen ? 'spread' : ''}`}
          ref={menuRef}
        >
          <a href=''>Inicio</a>
          <a href=''>Servicio</a>
          <a href=''>Portafolio</a>
          <a href=''>Expertos</a>
          <a href=''>Contacto</a>
        </nav>
        <div className='contenedor head'>
          <h1 className='titulo'>Convertimos tus sueños en realidad</h1>
          <p className='copy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci tempore facilis exercitationem rem ullam! Earum, aperiam perferendis eaque velit inventore delectus nihil enim officia nesciunt quibusdam deleniti ut laborum.</p>
        </div>
      </header>
      <main>
        <section className='contenedor' id='servicio'>
          <h2 className='subtitulo'>Nuestro Servicio</h2>
          <div className='contenedor-servicio'>
            <img src='../iconos/Checklist_Isometric.svg' alt='Servicio'></img>
            <div className='checklist-servicio'>
              <div className='service'>
                <h3 className="n-service"><span className='number'>1</span> Diseño Web</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias iure minus quo quaerat cum maiores, voluptatum error dolor impedit.</p>
              </div>
              <div className='service'>
                <h3 className="n-service"><span className='number'>2</span> Diseño Web</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias iure minus quo quaerat cum maiores, voluptatum error dolor impedit.</p>
              </div>
              <div className='service'>
                <h3 className="n-service"><span className='number'>3</span> Diseño Web</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias iure minus quo quaerat cum maiores, voluptatum error dolor impedit.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='gallery' id='portafolio'>
            <div className="contenedor">
              <h2 className='subtitulo'>Galeria</h2>
              <div className="contenedor-galeria">
                <img src='../img/1.jpg' className='img-galeria' onClick={() => toggleLightbox('../img/1.jpg')}></img>
                <img src='../img/2.jpg' className='img-galeria' onClick={() => toggleLightbox('../img/2.jpg')}></img>
                <img src='../img/3.jpg' className='img-galeria' onClick={() => toggleLightbox('../img/3.jpg')}></img>
                <img src='../img/4.jpg' className='img-galeria' onClick={() => toggleLightbox('../img/4.jpg')}></img>
                <img src='../img/5.jpg' className='img-galeria' onClick={() => toggleLightbox('../img/5.jpg')}></img>
                <img src='../img/6.jpg' className='img-galeria' onClick={() => toggleLightbox('../img/6.jpg')}></img>
              </div>
            </div>
        </section>
        <section className={`image-light ${isLightboxOpen ? 'show' : ''}`}>
        <img
          src='../iconos/bx-x.svg'
          className='close'
          onClick={closeLightbox}
          alt='Cerrar'
        />
        <img src={selectedImage} className='agregar-imagen' alt='Imagen en lightbox' />
      </section>
      </main>
    </>
  );
}

export default App;