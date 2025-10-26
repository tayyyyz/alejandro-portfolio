import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
            {/* Tag box-with gradient border */}
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                <i class='bx bx-diamond'></i>
                Student
                </div>
            </div>
            <h1 className='text-3xl sm:Text-4xl md:Text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                Hi, I'm Alejandro 
                <br />
                Aspiring Full Stack Developer
            </h1>
                {/* Description */}
                <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
                    I work with C++, HTML, CSS, Tailwind, and React to build clean, user-friendly web applications and continuously learn new technologies.
                </p>

                {/* Buttons */}
                <div className='flex gap-4 mt-12'>
                    <a className = 'border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black'
                    href="https://drive.google.com/file/d/1Ei381mi7Kd40jEFMswlNoC-ilzs2HMQy/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer">
                        CV <i class='bx  bx-link-alt'  ></i> 
                    </a>

                    <a className = 'border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'
                    href="https://www.linkedin.com/in/alejandrotaymarquez/"
                    target="_blank"
                    rel="noopener noreferrer">
                        LinkedIn <i class='bx  bx-link-alt'  ></i> 
                    </a>
                </div>
        </div>

        {/* Hero Image */}
        <Spline data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className = 'absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%]' scene="https://prod.spline.design/dkO4tZFPF8SWaK7F/scene.splinecode" />
    </main>
  )
}

export default Hero