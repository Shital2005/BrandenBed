import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">BrandenBed</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#properties" className="text-gray-700 hover:text-gray-900">Properties</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign In</button>
            <button className="text-gray-700 hover:text-gray-900">EN/DE</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
