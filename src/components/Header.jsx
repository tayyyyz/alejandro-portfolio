// src/components/Header.jsx
import 'boxicons/css/boxicons.min.css'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMobileMenu = () => setIsMenuOpen(v => !v)

  // Intensifica el fondo al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* HEADER FIJO CON BLUR */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          border-b border-white/10
          backdrop-blur
          ${scrolled ? 'bg-black/60' : 'bg-black/30'}
        `}
      >
        <div className="h-16 md:h-20 px-4 lg:px-20 max-w-6xl mx-auto flex justify-between items-center">
          <h1
            data-aos="zoom-in-down"
            className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
          >
            AlejandroDev
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a
              data-aos="zoom-in-down"
              className="text-base tracking-wider transition-colors hover:text-gray-300"
              href="#home"
            >
              HOME
            </a>

            <a
              data-aos="zoom-in-down"
              className="text-base tracking-wider transition-colors hover:text-gray-300"
              href="#projects"
            >
              PROJECTS
            </a>

            <a
              data-aos="zoom-in-down"
              className="text-base tracking-wider transition-colors hover:text-gray-300"
              href="#about"
            >
              ABOUT ME
            </a>

            <a
              data-aos="zoom-in-down"
              className="text-base tracking-wider transition-colors hover:text-gray-300"
              href="#contact"
            >
              CONTACT
            </a>
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-3xl p-2 text-white"
            aria-label="Toggle menu"
          >
            <i className="bx bx-menu" />
          </button>
        </div>

        {/* Menú móvil (aparece bajo el header fijo) */}
<div
  id="mobileMenu"
  className={`${
    isMenuOpen ? 'fixed' : 'hidden'
  } inset-0 z-40 flex flex-col justify-center items-center bg-black text-white transition-all duration-300`}
>
  {/* Botón “X” para cerrar */}
  <button
    onClick={() => setIsMenuOpen(false)}
    className="absolute top-5 left-5 text-3xl text-white hover:text-gray-400 transition-colors"
    aria-label="Close menu"
  >
    <i className="bx bx-x"></i>
  </button>

  {/* Links centrados */}
  <nav className="flex flex-col items-center gap-8 text-xl font-semibold tracking-wide">
    <a
      className="hover:text-amber-400 transition-colors"
      href="#home"
      onClick={() => setIsMenuOpen(false)}
    >
      HOME
    </a>
    <a
      className="hover:text-amber-400 transition-colors"
      href="#projects"
      onClick={() => setIsMenuOpen(false)}
    >
      PROJECTS
    </a>
    <a
      className="hover:text-amber-400 transition-colors"
      href="#about"
      onClick={() => setIsMenuOpen(false)}
    >
      ABOUT ME
    </a>
    <a
      className="hover:text-amber-400 transition-colors"
      href="#contact"
      onClick={() => setIsMenuOpen(false)}
    >
      CONTACT
    </a>
  </nav>
</div>
      </header>

      {/* Spacer para que el contenido no quede oculto tras el header fijo */}
      <div className="h-16 md:h-20" />
    </>
  )
}

export default Header
