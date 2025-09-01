import React from 'react'

function CoreValues() {
  const values = [
    {
      icon: "🏠",
      title: "Premium Properties",
      description: "Handpicked locations in Berlin's most desirable neighborhoods",
      color: "from-[#5C4E4E] to-gray-700"
    },
    {
      icon: "🤝",
      title: "Trusted Service",
      description: "18+ years of experience in real estate and property management",
      color: "from-gray-700 to-[#5C4E4E]"
    },
    {
      icon: "💎",
      title: "Quality Assurance",
      description: "Every property meets our strict quality and safety standards",
      color: "from-gray-600 to-[#5C4E4E]"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C4E4E] mb-6">
            Why Choose BrandenBed?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're not just another real estate company. We're your partners in finding the perfect space that feels like home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{value.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#5C4E4E] mb-4 group-hover:text-gray-700 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors">
                  {value.description}
                </p>
                
                {/* Hover effect line */}
                <div className={`w-0 h-1 bg-gradient-to-r ${value.color} mt-6 group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional features grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🔒", text: "Secure Payments" },
            { icon: "📱", text: "24/7 Support" },
            { icon: "🚇", text: "Prime Locations" },
            { icon: "✨", text: "Modern Amenities" }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="text-2xl mb-2">{feature.icon}</div>
              <div className="text-sm font-medium text-gray-700">{feature.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
