import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    // Agregamos id="home" para que el botón funcione y reacomodamos las alturas en celular
    <main id="home" className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] px-4 overflow-hidden">
      
      {/* El texto ahora no se tira hasta el fondo en celulares gracias a quitar mt-[90%] */}
      <div 
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" 
        className="max-w-xl lg:ml-[5%] z-10 mt-16 lg:mt-0 order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
      >
        {/* Tag box-with gradient border */}
        <div className='relative w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
          <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white'>
            <i className='bx bx-diamond'></i>
            Student
          </div>
        </div>

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 text-white'>
          Hi, I'm Alejandro 
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Aspiring Full Stack Developer
          </span>
        </h1>

        {/* Description */}
        <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
          I work with C++, HTML, CSS, Tailwind, and React to build clean, user-friendly web applications and continuously learn new technologies.
        </p>

        {/* Buttons */}
        <div className='flex gap-4 mt-12 mb-10 lg:mb-0'>
          <a 
            className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black flex items-center gap-1'
            href="https://drive.google.com/file/d/1mOY9VHaMDqbG3NX4kzaDW3bRhzLdhBeD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV <i className='bx bx-link-alt'></i> 
          </a>

          <a 
            className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] text-white flex items-center gap-1'
            href="https://www.linkedin.com/in/alejandrotaymarquez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <i className='bx bx-link-alt'></i> 
          </a>
        </div>
      </div>

      {/* Contenedor del Robot de Spline: Controlado para que no rompa la pantalla en celular */}
      <div 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" 
        className="w-full h-[50vh] lg:h-[80vh] lg:absolute lg:right-0 lg:top-0 lg:w-[50%] order-1 lg:order-2"
      >
        <Spline scene="https://prod.spline.design/dkO4tZFPF8SWaK7F/scene.splinecode" />
      </div>
    </main>
  )
}

export default Hero