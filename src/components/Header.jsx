// src/components/Header.jsx
import 'boxicons/css/boxicons.min.css'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMobileMenu = () => setIsMenuOpen(v => !v)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* HEADER FIJO */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-40
          border-b border-white/10
          backdrop-blur
          ${scrolled ? 'bg-black/60' : 'bg-black/30'}
        `}
      >
        {/* Usamos w-full para evitar desbordamientos laterales */}
        <div className="w-full max-w-6xl mx-auto h-16 md:h-20 px-4 flex justify-between items-center flex-nowrap">
          
          <h1 className="text-2xl md:text-4xl font-light text-white truncate">
            AlejandroDev
          </h1>

          <nav className="hidden md:flex items-center gap-12 text-white/90">
            {['HOME', 'PROJECTS', 'ABOUT ME', 'CONTACT'].map((item) => (
              <a
                key={item}
                className="text-base tracking-wider hover:text-gray-300 transition-colors"
                href={`#${item.toLowerCase().replace(' ', '') === 'aboutme' ? 'about' : item.toLowerCase().replace(' ', '')}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-3xl text-white flex items-center justify-center h-12 w-12 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <i className="bx bx-menu" />
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL CORREGIDO */}
      {/* Usamos w-full y h-full en lugar de screen para evitar problemas de scrollbar */}
      <div
        id="mobileMenu"
        className={`
          fixed inset-0 z-50 w-full h-full
          flex flex-col justify-center items-center 
          bg-black/95 backdrop-blur-lg text-white 
          transition-all duration-300
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-4xl h-14 w-14 flex items-center justify-center rounded-full hover:bg-neutral-800 transition-all"
          aria-label="Close menu"
        >
          <i className="bx bx-x"></i>
        </button>

        <nav className="flex flex-col items-center gap-8">
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
              className="text-3xl font-bold tracking-widest text-white/80 hover:text-amber-400 transition-all active:scale-90"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="h-16 md:h-20" />
    </>
  )
}

export default Header