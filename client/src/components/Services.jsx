import React from 'react'

function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🏢</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Rentals</h3>
            <p className="text-gray-600">Find your perfect rental property in Berlin's most desirable neighborhoods.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tenant Support</h3>
            <p className="text-gray-600">24/7 support for all your rental needs and maintenance requests.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Management</h3>
            <p className="text-gray-600">Complete property management services for landlords and investors.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
