// src/components/Contact.jsx
import 'boxicons/css/boxicons.min.css'

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative mt-24 px-4 lg:px-20 pb-16
        bg-transparent
      "
    >
      {/* Glow continuo de fondo */}
      <div
        className="
          pointer-events-none absolute -z-10
          right-[-25%] top-[-20%]
          h-[1100px] w-[1100px] rounded-full
          blur-3xl
          bg-[radial-gradient(circle_at_center,rgba(255,170,51,0.18),rgba(0,0,0,0)_65%)]
          max-md:right-[-35%] max-md:top-[-35%] max-md:h-[900px] max-md:w-[900px]
        "
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white/95">
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <div className="h-[3px] w-16 rounded-full mt-3 bg-gradient-to-r from-amber-400 to-orange-600 shadow-[0_0_18px_rgba(255,170,51,0.55)]" />

          {/* Subtítulo estático */}
          <p className="text-lg md:text-xl mt-4 text-white/70">
            Interested in collaborating or just want to say hi? Let’s connect!
          </p>
        </div>

        {/* Layout en 2 columnas */}
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* Columna izquierda: info + redes */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white/80">
              <i className="bx bx-map text-2xl text-amber-400/90" />
              <span className="text-base md:text-lg">Potsdam, Germany</span>
            </div>

            <a
              href="mailto:alejandroatmbrit@gmail.com"
              className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <i className="bx bx-envelope text-2xl text-amber-400/90 group-hover:drop-shadow-[0_0_10px_rgba(255,170,51,0.6)]" />
              <span className="underline/30 decoration-amber-500/30 group-hover:decoration-amber-500">
                alejandroatmbrit@gmail.com
              </span>
            </a>

            {/* Socials */}
            <div className="flex gap-5 pt-2">
              {[
                { href: '#', icon: 'bxl-twitter', label: 'Twitter/X' },
                { href: '#', icon: 'bxl-instagram', label: 'Instagram' },
                {
                  href: 'https://www.linkedin.com/in/alejandrotaymarquez/',
                  icon: 'bxl-linkedin',
                  label: 'LinkedIn',
                },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="
                    inline-flex h-12 w-12 items-center justify-center rounded-full
                    ring-1 ring-neutral-800/80 bg-neutral-900/40
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:ring-amber-500 hover:shadow-[0_0_18px_rgba(255,170,51,0.22)]
                    hover:translate-y-[-1px]
                  "
                >
                  <i className={`bx ${s.icon} text-2xl text-white/90`} />
                </a>
              ))}
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="max-w-xl md:max-w-none">
            <form
              action="https://formspree.io/f/xdkzjewg"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                className="
                  bg-transparent border border-neutral-800 rounded-md p-3
                  outline-none text-white/90 placeholder:text-white/40
                  transition-all
                  focus:border-amber-500
                  focus:shadow-[0_0_12px_rgba(255,170,51,0.22)]
                "
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
              />
              <input
                className="
                  bg-transparent border border-neutral-800 rounded-md p-3
                  outline-none text-white/90 placeholder:text-white/40
                  transition-all
                  focus:border-amber-500
                  focus:shadow-[0_0_12px_rgba(255,170,51,0.22)]
                "
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
              <input
                className="
                  bg-transparent border border-neutral-800 rounded-md p-3
                  outline-none text-white/90 placeholder:text-white/40
                  transition-all
                  focus:border-amber-500
                  focus:shadow-[0_0_12px_rgba(255,170,51,0.22)]
                "
                type="text"
                name="subject"
                placeholder="Enter your Subject"
              />
              <textarea
                className="
                  bg-transparent border border-neutral-800 rounded-md p-3
                  outline-none text-white/90 placeholder:text-white/40
                  transition-all min-h-[140px]
                  focus:border-amber-500
                  focus:shadow-[0_0_12px_rgba(255,170,51,0.22)]
                "
                name="message"
                id="message"
                cols="40"
                rows="5"
                placeholder="Enter your Message"
                required
              />
              <button
                type="submit"
                className="
                  relative inline-flex items-center gap-2 self-start
                  rounded-full px-6 py-2.5 font-semibold tracking-wide
                  text-black
                  bg-gradient-to-r from-amber-400 to-orange-600
                  shadow-[0_8px_30px_rgba(255,170,51,0.15)]
                  transition-all duration-300
                  hover:shadow-[0_12px_45px_rgba(255,170,51,0.28)]
                  hover:translate-y-[-1px]
                  active:translate-y-[0px]
                "
              >
                <i className="bx bx-send text-xl" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
