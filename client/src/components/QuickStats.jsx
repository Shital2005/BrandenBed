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
              className="bg-white rounded-2xl border-2 border-[#F7B500] shadow-lg p-8 flex flex-col items-center justify-center cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }} // faster entry
                whileHover={{
                  scale: 1.10,
                  y: -8,
                  boxShadow: '0 8px 32px 0 rgba(247,181,0,0.25)',
                  transition: { duration: 0.12 } // fast, smooth hover in/out
                }}
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
