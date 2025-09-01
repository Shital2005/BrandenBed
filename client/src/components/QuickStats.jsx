import React from 'react';
import { motion } from 'framer-motion';
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
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl border-2 border-[#F7B500] shadow-lg p-8 flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(247,181,0,0.25)] cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <span className="text-4xl mb-4 text-[#F7B500]">{stat.icon}</span>
              <div className="text-3xl font-bold" style={{ color: '#0A1D37' }}>{stat.number}</div>
              <p className="text-lg text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default QuickStats
