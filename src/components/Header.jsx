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
          fixed top-0 inset-x-0 z-40
          border-b border-white/10
          backdrop-blur
          ${scrolled ? 'bg-black/60' : 'bg-black/30'}
        `}
      >
        <div className="h-16 md:h-20 px-4 lg:px-20 max-w-6xl mx-auto flex justify-between items-center">
          {/* TÍTULO REPOSITORIO (RESTAURADO EXACTAMENTE COMO ANTES) */}
          <h1
            data-aos="zoom-in-down"
            className="text-3xl md:text-4xl lg:text-5xl font-light m-0 text-white"
          >
            AlejandroDev
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-white/90">
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

          {/* Botón menú móvil - ¡MÁS GRANDE PARA TOCAR FÁCIL! */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-4xl p-2 text-white"
            aria-label="Toggle menu"
          >
            <i className="bx bx-menu" />
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL (FUERA DEL HEADER, OCUPA TODA LA PANTALLA) */}
      <div
        id="mobileMenu"
        className={`
          fixed inset-0 w-screen h-screen z-50 
          flex flex-col justify-center items-center 
          bg-black/95 backdrop-blur-lg text-white 
          transition-all duration-300
          ${isMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}
        `}
      >
        {/* Botón “X” para cerrar - ¡MÁS GRANDE! */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-4xl text-white hover:text-gray-400 h-14 w-14 flex items-center justify-center rounded-full hover:bg-neutral-900/50 transition-all duration-200"
          aria-label="Close menu"
        >
          <i className="bx bx-x"></i>
        </button>

        {/* Links centrados - ¡GRANDES, MODERNOS Y CON ANIMACIÓN SMOOTH AL PASAR EL DEDO! */}
        <nav className="flex flex-col items-center gap-8 text-center">
          {[
            { href: '#home', label: 'HOME' },
            { href: '#projects', label: 'PROJECTS' },
            { href: '#about', label: 'ABOUT ME' },
            { href: '#contact', label: 'CONTACT' }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="
                text-3xl font-bold tracking-widest text-white/80 transition-all duration-300
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500
                hover:scale-110 active:scale-95
              "
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Spacer para que el contenido no quede oculto tras el header fijo */}
      <div className="h-16 md:h-20" />
    </>
  )
}

export default Header