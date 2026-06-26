// src/components/Projects.jsx
import { useState, useEffect } from 'react'
import 'boxicons/css/boxicons.min.css'

const Projects = () => {
  const [open, setOpen] = useState(false)
  const [animate, setAnimate] = useState(false)

  const projectImages = [
    "/project_pics/1.jpg",
    "/project_pics/2.jpg",
    "/project_pics/3.jpg",
    "/project_pics/4.jpg",
    "/project_pics/5.jpg"
  ]

  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setAnimate(true), 10)
      return () => clearTimeout(timer)
    } else {
      setAnimate(false)
    }
  }, [open])

  const closeModalWithAnimation = () => {
    setAnimate(false)
    setTimeout(() => setOpen(false), 250)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1))
  }

  return (
    <section
      id="projects"
      className="relative mt-24 px-4 lg:px-20 pb-16 bg-transparent scroll-mt-24"
    >
      {/* Glow sutil de fondo */}
      <div
        className="
          pointer-events-none absolute -z-10
          left-[-25%] top-[-20%]
          h-[900px] w-[900px] rounded-full
          blur-3xl
          bg-[radial-gradient(circle_at_center,rgba(255,170,51,0.12),rgba(0,0,0,0)_65%)]
          max-md:left-[-40%] max-md:top-[-35%] max-md:h-[700px] max-md:w-[700px]
        "
      />

      <div className="max-w-6xl mx-auto">
        <div className="group text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white/95">
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="h-[3px] w-12 rounded-full mt-3 bg-gradient-to-r from-amber-400 to-orange-600 shadow-[0_0_15px_rgba(255,170,51,0.6)] transition-all duration-500 ease-out group-hover:w-36" />
          
          <p className="text-lg text-white/60 mt-4 font-light tracking-wide">
            A selection of my recent and personal work.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="border border-neutral-900 rounded-2xl bg-neutral-900/40 backdrop-blur-sm p-6 hover:border-amber-500 hover:shadow-[0_0_25px_rgba(255,170,51,0.25)] transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl md:text-2xl font-semibold text-white/90 tracking-tight">
                The Defenders of the Amazon
              </h3>
              <i className="bx bxl-c-plus-plus text-3xl text-amber-500" />
            </div>

            <p className="text-white/70 leading-relaxed mb-6 font-light">
              A mathematical game developed in <strong>C++</strong> that
              challenges the player with logical and numerical problems.
            </p>

            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-sm font-medium">
                  C++
                </span>
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-sm font-medium">
                  Console Game
                </span>
              </div>

              <button
                onClick={() => {
                  setCurrentImgIndex(0)
                  setOpen(true)
                }}
                className="mt-4 md:mt-0 text-amber-400 font-semibold flex items-center gap-1 hover:text-orange-500 transition-colors duration-200"
              >
                <i className="bx bx-link-external text-lg" />
                View details
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-out bg-black/40 backdrop-blur-md ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModalWithAnimation}
        >
          <div
            className={`
              bg-neutral-950 max-w-xl w-full p-6 md:p-8 rounded-2xl border text-white relative flex flex-col gap-4 shadow-2xl transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1)
              border-neutral-900 hover:border-amber-500/40 hover:shadow-[0_0_35px_rgba(255,170,51,0.15)]
              ${animate ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-2 opacity-0'}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModalWithAnimation}
              className="absolute top-5 right-5 text-white/40 hover:text-white text-xl transition-colors p-1 rounded-lg hover:bg-neutral-900 flex items-center justify-center"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Project Details
            </h3>

            <p className="text-white/70 leading-relaxed text-sm md:text-base font-light tracking-wide">
              The Defenders of the Amazon is a C++ game where two characters compete to collect coins. When a player grabs a coin, a basic math question appears. If answered correctly, the coin counts; if not, it doesn't. The first player to collect 3 coins wins. The game was developed entirely in C++ using simple graphics.
            </p>

            <div className="relative flex items-center justify-center w-full aspect-video bg-black/60 rounded-xl overflow-hidden border border-neutral-900 mt-2">
              <button
                onClick={prevImage}
                className="absolute left-3 z-10 h-9 w-9 rounded-full bg-black/60 border border-white/10 hover:bg-amber-500 hover:text-black transition-all duration-200 flex items-center justify-center text-xl"
                aria-label="Previous image"
              >
                <i className="bx bx-chevron-left" />
              </button>

              {/* Animación añadida aquí mediante la key y la clase animate-fade */}
              <img
                key={currentImgIndex}
                src={projectImages[currentImgIndex]}
                alt="Project screenshot"
                onClick={() => setIsLightboxOpen(true)}
                className="w-full h-full object-cover cursor-zoom-in hover:scale-102 transition-transform duration-300 animate-[fade_0.4s_ease-in-out]"
              />

              <button
                onClick={nextImage}
                className="absolute right-3 z-10 h-9 w-9 rounded-full bg-black/60 border border-white/10 hover:bg-amber-500 hover:text-black transition-all duration-200 flex items-center justify-center text-xl"
                aria-label="Next image"
              >
                <i className="bx bx-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      )}

      {open && isLightboxOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-neutral-900 border border-white/10 text-white hover:bg-orange-600 transition-colors text-2xl flex items-center justify-center"
            aria-label="Close fullscreen"
          >
            <i className="bx bx-x" />
          </button>

          <div
            className="max-w-4xl max-h-[80vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projectImages[currentImgIndex]}
              alt="Project screenshot fullscreen"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default Projects