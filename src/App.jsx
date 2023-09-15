import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
        <section className='contenedor' id='servicio'></section>
          <h2 className='subtitulo'>Nuestro Servicio</h2>
          <div className='contenedor-servicio'>
            <img src='../iconos/Checklist_Isometric.svg' alt='Servicio'></img>
            <div className='checklist-servicio'>
              <div className='service'>
                <h3 class="n-service"><span className='number'>1</span>Diseño Web</h3>
              </div>
            </div>
          </div>
        <section></section>
        <section></section>
      </main>
    </>
  );
}

export default App;