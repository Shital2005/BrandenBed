
import { motion } from 'framer-motion';
import HeroImage from '../images/HeroImage.jpeg';

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Berlin cityscape at dusk background with golden overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={HeroImage}
          alt="Berlin cityscape at dusk"
          className="w-full h-full object-cover filter grayscale-[40%] brightness-75"
          style={{ objectPosition: 'center' }}
        />
        {/* Semi-transparent navy overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(13, 27, 42, 0.75)',
            zIndex: 1,
          }}
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-32 text-center flex flex-col items-center">
        {/* Soft golden radial glow behind text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none" style={{zIndex: -1}}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(247,181,0,0.25) 0%, rgba(247,181,0,0.05) 70%, transparent 100%)',
            filter: 'blur(10px)',
          }} />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg"
        >
          Find Your Dream Space in Berlin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl mb-10 font-semibold"
          style={{ color: '#F7B500' }}
        >
          Discover spacious, stylish, and secure homes for students and professionals
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-[#F7B500] text-[#0D1B2A] font-bold rounded-xl shadow-lg transition-colors duration-300 hover:bg-yellow-400"
          >
            Explore Properties
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#F7B500', color: '#0D1B2A' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 border-2 border-[#F7B500] text-[#F7B500] font-bold rounded-xl bg-transparent transition-colors duration-300 hover:bg-[#F7B500] hover:text-[#0D1B2A]"
          >
            Watch Demo
          </motion.button>
        </div>
         
      </div>
    </section>
  )
}

export default Hero
