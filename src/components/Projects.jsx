// src/components/Projects.jsx
import 'boxicons/css/boxicons.min.css'

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative mt-24 px-4 lg:px-20 pb-16
        bg-transparent
      "
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
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white/95">
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-white/60 mt-3">
            A selection of my recent and personal work.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* The Defenders of the Amazon */}
          <div
            className="
              border border-neutral-800 rounded-2xl
              bg-neutral-900/40 backdrop-blur-sm
              p-6 hover:border-amber-500
              hover:shadow-[0_0_25px_rgba(255,170,51,0.25)]
              transition-all duration-300
            "
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl md:text-2xl font-semibold text-white/90">
                The Defenders of the Amazon
              </h3>
              <i className="bx bxl-c-plus-plus text-3xl text-amber-500" />
            </div>

            <p className="text-white/70 leading-relaxed mb-6">
              A mathematical game developed in <strong>C++</strong> that
              challenges the player with logical and numerical problems.
              It was designed to make learning fun through interactive and
              engaging gameplay mechanics.
            </p>

            <div className="flex flex-wrap items-center justify-between">
              {/* Etiquetas de tecnología */}
              <div className="flex flex-wrap gap-2">
                <span
                  className="
                    bg-amber-500/10 text-amber-400 border border-amber-500/30
                    px-3 py-1 rounded-full text-sm font-medium
                  "
                >
                  C++
                </span>
                <span
                  className="
                    bg-amber-500/10 text-amber-400 border border-amber-500/30
                    px-3 py-1 rounded-full text-sm font-medium
                  "
                >
                  Console Game
                </span>
              </div>

              {/* Link */}
              <a
                href="#"
                className="
                  mt-4 md:mt-0 text-amber-400 font-semibold flex items-center gap-1
                  hover:text-orange-500 transition-colors
                "
              >
                <i className="bx bx-link-external text-lg" />
                View details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
