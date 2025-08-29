import React from 'react'

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Space in Berlin
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            500+ properties, trusted for 18 years, 1200+ happy clients
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Properties →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
