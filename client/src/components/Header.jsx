import React, { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  const navLink = 'text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md transition-colors'

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      {/* Utility bar */}
      <div className="hidden md:block border-b border-gray-200/70 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-9 flex items-center justify-end gap-6 text-sm">
            <a href="#careers" className="text-gray-600 hover:text-blue-700">Careers</a>
            <a href="#login" className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 font-medium">
              <span>Sign Up</span>
              <span className="text-gray-400">/</span>
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="inline-flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-blue-600" />
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">BrandenBed</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#properties" className={navLink}>Find a Property</a>
            <a href="#services" className={`${navLink} inline-flex items-center gap-1`}>
              Our Services
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.18l3.71-2.95a.75.75 0 1 1 .94 1.16l-4.24 3.37a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z"/></svg>
            </a>
            <a href="#insights" className={navLink}>Insights</a>
            <a href="#people" className={navLink}>People & Offices</a>
            <a href="#about" className={navLink}>About Us</a>
          </nav>

          {/* Right: search + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center">
              <input
                type="search"
                placeholder="Search"
                className="w-56 lg:w-72 rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <button className="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-2 text-gray-600 hover:text-blue-700">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
              </button>
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <a href="#properties" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Find a Property</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Our Services</a>
            <a href="#insights" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Insights</a>
            <a href="#people" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">People & Offices</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">About Us</a>
            <div className="pt-2 flex gap-2">
              <a href="#careers" className="flex-1 px-3 py-2 text-center rounded-md border border-gray-300 text-gray-700">Careers</a>
              <a href="#login" className="flex-1 px-3 py-2 text-center rounded-md bg-pink-600 text-white">Sign Up / Login</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
