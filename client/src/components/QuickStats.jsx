import React from 'react';
import { FaBuilding, FaSmile, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const stats = [
  { icon: <FaBuilding stroke="#F7B500" color="#F7B500" size={40} />, number: '500+', label: 'Properties Sold' },
  { icon: <FaSmile stroke="#F7B500" color="#F7B500" size={40} />, number: '1200+', label: 'Happy Clients' },
  { icon: <FaClock stroke="#F7B500" color="#F7B500" size={40} />, number: '18+', label: 'Years Experience' },
  { icon: <FaMapMarkerAlt stroke="#F7B500" color="#F7B500" size={40} />, number: '8+', label: 'Districts in Berlin' },
];

function QuickStats() {
  return (
    <section className="py-16" style={{ background: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#0A1D37' }}>
            Trusted by Thousands
          </h2>
          <p className="text-xl" style={{ color: '#333' }}>
            Our track record speaks for itself. Join thousands of satisfied customers who found their perfect space.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 flex flex-col items-center border-2 border-[#F7B500] shadow-[0_4px_24px_rgba(247,181,0,0.12)]">
              <span className="mb-4">{stat.icon}</span>
              <div className="text-3xl font-bold" style={{ color: '#0A1D37' }}>{stat.number}</div>
              <div className="text-sm font-medium" style={{ color: '#333' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default QuickStats
