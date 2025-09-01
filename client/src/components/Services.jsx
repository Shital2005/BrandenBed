import React from 'react';
import { FaBed, FaWifi, FaShieldAlt, FaUsers, FaBolt, FaLaptop, FaBus, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconMap = {
  'Property Management': <FaBed size={24} className="text-[#F7B500]" />,
  'Roommate Matching': <FaUsers size={24} className="text-[#F7B500]" />,
  'Maintenance Support': <FaShieldAlt size={24} className="text-[#F7B500]" />,
  'Flexible Leasing': <FaUniversity size={24} className="text-[#F7B500]" />,
  'Modern, fully furnished rooms': <FaBed size={24} className="text-[#F7B500]" />,
  'High-speed WiFi': <FaWifi size={24} className="text-[#F7B500]" />,
  '24/7 security & support': <FaShieldAlt size={24} className="text-[#F7B500]" />,
  'Community events & networking': <FaUsers size={24} className="text-[#F7B500]" />,
  '24/7 power backup': <FaBolt size={24} className="text-[#F7B500]" />,
  'Dedicated work desk': <FaLaptop size={24} className="text-[#F7B500]" />,
  'Near public transport': <FaBus size={24} className="text-[#F7B500]" />,
  'Nearby all universities': <FaUniversity size={24} className="text-[#F7B500]" />,
};

const services = [
  { title: 'Modern, fully furnished rooms', icon: <FaBed size={24} className="text-[#F7B500]" /> },
  { title: 'High-speed WiFi', icon: <FaWifi size={24} className="text-[#F7B500]" /> },
  { title: '24/7 security & support', icon: <FaShieldAlt size={24} className="text-[#F7B500]" /> },
  { title: 'Community events & networking', icon: <FaUsers size={24} className="text-[#F7B500]" /> },
  { title: '24/7 power backup', icon: <FaBolt size={24} className="text-[#F7B500]" /> },
  { title: 'Dedicated work desk', icon: <FaLaptop size={24} className="text-[#F7B500]" /> },
  { title: 'Near public transport', icon: <FaBus size={24} className="text-[#F7B500]" /> },
  { title: 'Nearby all universities', icon: <FaUniversity size={24} className="text-[#F7B500]" /> },
];

const Services = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12">
        <h2
          className="text-center font-bold"
          style={{
            color: '#0D1B2A',
            fontSize: '40px',
            fontWeight: 700,
            letterSpacing: '-1px',
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            width: '40px',
            height: '4px',
            background: '#F7B500',
            borderRadius: '2px',
            marginTop: '8px',
          }}
        />
        <p className="text-lg text-gray-700 mt-4 text-center max-w-2xl">
          Designed to make your stay stress-free and productive.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-[20px] border border-transparent shadow-[0_6px_16px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center transition-all duration-150 cursor-pointer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            whileHover={{ scale: 1.08, y: -8, boxShadow: '0 12px 32px 0 rgba(247,181,0,0.12)', borderColor: '#F7B500', transition: { duration: 0.12 } }}
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-full mb-5 transition-all duration-150" style={{ background: '#0D1B2A', boxShadow: '0 0 0 0 rgba(247,181,0,0)' }}>
              {iconMap[service.title] || <FaBed size={24} className="text-[#F7B500]" />}
            </span>
            <h3 className="font-bold text-center" style={{ color: '#0D1B2A', fontSize: '16px' }}>{service.title}</h3>
            {service.description && (
              <p className="text-gray-700 text-center" style={{ fontSize: '14px' }}>{service.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

