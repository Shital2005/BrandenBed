import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState('EN')

  const navLink = 'text-white hover:text-yellow px-4 py-2 rounded-md transition-colors duration-200 font-medium'
  const activeNavLink = 'text-yellow bg-navy-dark px-4 py-2 rounded-md font-medium'

  return (
  <header className="w-full" style={{ backgroundColor: 'rgb(4, 22, 41)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="inline-flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="BrandenBed Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/properties" className={navLink}>Properties</Link>
            <a href="#about" className={navLink}>About Us</a>
            <a href="#services" className={navLink}>Services</a>
            <a href="#contact" className={navLink}>Contact</a>
            
            {/* Language Toggle */}
            <div className="ml-4 flex items-center border-l border-yellow pl-4">
              <button
                onClick={() => setLanguage(language === 'EN' ? 'DE' : 'EN')}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:text-yellow hover:bg-navy-dark rounded-md transition-colors duration-200"
              >
                <span className="text-xs font-bold">{language}</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>
            </div>

            {/* Sign In Button */}
            <a 
              href="#signin" 
              className="ml-4 inline-flex items-center px-4 py-2 border border-yellow text-sm font-medium rounded-md text-navy bg-yellow hover:bg-yellow-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow transition-colors duration-200 shadow-sm"
            >
              Sign In
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language toggle for mobile */}
            <button
              onClick={() => setLanguage(language === 'EN' ? 'DE' : 'EN')}
              className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-white hover:text-yellow rounded-md"
            >
              <span className="text-xs font-bold">{language}</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>
            
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-navy-dark hover:text-yellow focus:outline-none focus:ring-2 focus:ring-yellow transition-colors duration-200"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {open && (
  <div className="md:hidden border-t border-yellow bg-navy-dark shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <a href="#properties" className="block px-3 py-2 text-white hover:bg-yellow hover:text-navy rounded-md font-medium transition-colors duration-200">
              Properties
            </a>
            <a href="#about" className="block px-3 py-2 text-white hover:bg-yellow hover:text-navy rounded-md font-medium transition-colors duration-200">
              About Us
            </a>
            <a href="#services" className="block px-3 py-2 text-white hover:bg-yellow hover:text-navy rounded-md font-medium transition-colors duration-200">
              Services
            </a>
            <a href="#contact" className="block px-3 py-2 text-white hover:bg-yellow hover:text-navy rounded-md font-medium transition-colors duration-200">
              Contact
            </a>
            
            {/* Mobile Sign In Button */}
            <div className="pt-3 border-t border-yellow">
              <a 
                href="#signin" 
                className="block w-full text-center px-4 py-2 border border-yellow text-sm font-medium rounded-md text-navy bg-yellow hover:bg-yellow-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow transition-colors duration-200"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
