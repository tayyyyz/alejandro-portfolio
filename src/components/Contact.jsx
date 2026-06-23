// src/components/Contact.jsx
import 'boxicons/css/boxicons.min.css'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative mt-24 px-4 lg:px-20 pb-24 bg-transparent scroll-mt-24 overflow-hidden"
    >
      {/* FIX DEFINITIVO: Luces centradas con translate-x y mayor desenfoque para que el degradado muera a cero de forma natural antes de tocar los bordes ocultos */}
      <div className="pointer-events-none absolute -z-10 left-1/4 top-[-5%] h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[160px] bg-amber-500/10 animate-pulse duration-[6s]" />
      <div className="pointer-events-none absolute -z-10 left-3/4 bottom-[-5%] h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[160px] bg-orange-600/10" />

      <div className="max-w-6xl mx-auto">
        
        {/* HEADER DE LA SECCIÓN CON LÍNEA ANIMADA */}
        <div className="group max-w-2xl mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white/95">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Let's Create Something Great
            </span>
          </h2>
          
          <div className="h-[3px] w-12 rounded-full mt-4 bg-gradient-to-r from-amber-400 to-orange-600 shadow-[0_0_15px_rgba(255,170,51,0.6)] transition-all duration-500 ease-out group-hover:w-32" />
          
          <p className="text-lg md:text-xl mt-4 text-white/60 font-light">
            Interested in collaborating, hiring, or just want to say hi? Drop a message!
          </p>
        </div>

        {/* Layout en 2 columnas */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Columna Izquierda: Tarjetas de Información y Redes */}
          <div className="flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              
              {/* Tarjeta Ubicación: Estilo Píldora Totalmente Redondeado */}
              <div className="group/card relative flex items-center gap-5 p-5 rounded-full border border-neutral-900 bg-neutral-950/40 backdrop-blur-md transition-all duration-300 transform hover:scale-[1.02] hover:border-amber-500/40 hover:bg-neutral-900/20 hover:shadow-[0_0_30px_rgba(255,170,51,0.1)]">
                <div className="h-14 w-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 text-3xl group-hover/card:scale-110 group-hover/card:text-orange-500 group-hover/card:border-orange-500/30 transition-all duration-300 shadow-inner">
                  <i className="bx bx-map animate-bounce duration-[3s]" />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase font-bold tracking-widest">Location</p>
                  <p className="text-lg text-white/80 font-medium">Berlin, Germany</p>
                </div>
              </div>

              {/* Tarjeta Email: Estilo Píldora Totalmente Redondeado */}
              <a
                href="mailto:alejandroatmbrit@gmail.com"
                className="group/card relative flex items-center gap-5 p-5 rounded-full border border-neutral-900 bg-neutral-950/40 backdrop-blur-md transition-all duration-300 transform hover:scale-[1.02] hover:border-orange-500/40 hover:bg-neutral-900/20 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"
              >
                <div className="h-14 w-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 text-3xl group-hover/card:scale-110 group-hover/card:text-orange-500 group-hover/card:border-orange-500/30 transition-all duration-300 shadow-inner">
                  <i className="bx bx-envelope" />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase font-bold tracking-widest">Email Me</p>
                  <p className="text-lg text-white/80 font-medium group-hover/card:text-amber-400 transition-colors duration-300 break-all underline decoration-neutral-800 group-hover/card:decoration-amber-400">
                    alejandroatmbrit@gmail.com
                  </p>
                </div>
              </a>

            </div>

            {/* Redes Sociales: Alineación Central con tu NUEVO ENLACE del CV de Google Docs */}
            <div className="space-y-6 pt-6 border-t border-neutral-900 flex flex-col items-center justify-center text-center">
              <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Profiles & Networks</p>
              <div className="flex gap-5 justify-center">
                {[
                  { href: 'https://x.com/alejandrotayz', icon: 'bxl-twitter', label: 'Twitter/X', color: 'hover:text-[#1DA1F2]' },
                  { href: 'https://instagram.com/alejandrotaym', icon: 'bxl-instagram', label: 'Instagram', color: 'hover:text-[#E1306C]' },
                  { href: 'https://www.linkedin.com/in/alejandrotaymarquez/', icon: 'bxl-linkedin', label: 'LinkedIn', color: 'hover:text-[#0077B5]' },
                  { href: 'https://drive.google.com/file/d/1mOY9VHaMDqbG3NX4kzaDW3bRhzLdhBeD/view?usp=sharing', icon: 'bx-file', label: 'CV / Portfolio Docs', color: 'hover:text-[#4285F4]' },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/40 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_10px_25px_rgba(255,170,51,0.25)]"
                  >
                    <i className={`bx ${s.icon} text-2xl text-white/70 transition-colors duration-300 ${s.color} group-hover/btn:scale-110`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario con GLOW EXTERIOR */}
          <div className="relative group/form">
            
            {/* CAPA DE GLOW NEÓN TRASERA */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-600/30 rounded-[2.2rem] blur-xl opacity-80 transition-all duration-500 group-hover/form:opacity-100 group-hover/form:blur-2xl pointer-events-none" />
            
            {/* CONTENEDOR DEL FORMULARIO CON SOMBRA INTENSA */}
            <form
              action="https://formspree.io/f/xdkzjewg"
              method="POST"
              className="relative h-full bg-neutral-950/85 backdrop-blur-2xl border border-amber-500/20 p-8 rounded-[2rem] flex flex-col gap-5 shadow-[0_0_40px_rgba(255,150,30,0.15)] transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_0_55px_rgba(255,150,30,0.3)]"
            >
              {[
                { name: 'name', type: 'text', placeholder: 'Enter your Name' },
                { name: 'email', type: 'email', placeholder: 'Enter your Email' },
                { name: 'subject', type: 'text', placeholder: 'Enter your Subject' },
              ].map((input) => (
                <div key={input.name} className="relative">
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    required={input.name !== 'subject'}
                    className="w-full bg-neutral-900/40 border border-neutral-800 rounded-2xl p-4 outline-none text-white/90 placeholder:text-white/25 text-base transition-all duration-500 hover:border-neutral-700 focus:border-amber-500 focus:bg-neutral-900/60 focus:rounded-full focus:shadow-[0_0_25px_rgba(255,170,51,0.2)]"
                  />
                </div>
              ))}

              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Enter your Message"
                  required
                  className="w-full bg-neutral-900/40 border border-neutral-800 rounded-2xl p-4 outline-none text-white/90 placeholder:text-white/25 text-base transition-all duration-500 hover:border-neutral-700 focus:border-amber-500 focus:bg-neutral-900/60 focus:rounded-[2rem] focus:shadow-[0_0_25px_rgba(255,170,51,0.2)]"
                />
              </div>

              {/* Botón de Envíos */}
              <button
                type="submit"
                className="group/send relative overflow-hidden inline-flex items-center justify-center gap-3 w-full rounded-2xl py-4 font-bold tracking-wide text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 shadow-[0_10px_30px_rgba(255,170,51,0.25)] transition-all duration-500 ease-out hover:shadow-[0_15px_45px_rgba(255,170,51,0.5)] hover:rounded-full hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/send:translate-x-full transition-transform duration-1000 ease-out" />
                <i className="bx bx-send text-xl transition-transform duration-300 group-hover/send:translate-x-1 group-hover/send:-translate-y-1" />
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