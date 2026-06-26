// src/components/About.jsx
import 'boxicons/css/boxicons.min.css'

const About = () => {
  return (
    <section
      id="about"
      className="relative mt-24 px-4 lg:px-20 pb-16 bg-transparent scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="group max-w-2xl mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white/95">
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              About me
            </span>
          </h2>
          
          <div className="h-[3px] w-12 rounded-full mt-3 bg-gradient-to-r from-amber-400 to-orange-600 shadow-[0_0_15px_rgba(255,170,51,0.6)] transition-all duration-500 ease-out group-hover:w-28" />
        </div>

        <div className="max-w-4xl">
          <p className="text-base md:text-lg text-white/80 font-light leading-relaxed tracking-wide">
            Software Engineering student with a passion for crafting elegant and efficient 
            solutions. I thrive on transforming complex problems into seamless user 
            experiences, leveraging my skills in JavaScript, React, and Node.js to build 
            innovative web applications. With a strong foundation in both front-end and 
            back-end development, I am dedicated to continuous learning and eager to 
            contribute to impactful projects that make a difference.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About