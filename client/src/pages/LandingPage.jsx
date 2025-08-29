import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import QuickStats from '../components/QuickStats'
import CoreValues from '../components/CoreValues'
import Services from '../components/Services'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuickStats />
      <CoreValues />
      <Services />
      <Footer />
    </div>
  )
}

export default LandingPage
