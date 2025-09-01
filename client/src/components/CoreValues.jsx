import React from 'react';
import { FaShieldAlt, FaHome, FaWallet } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconMap = {
  'Safety': <FaShieldAlt className="text-[#F7B500]" size={28} />,
  'Safety First': <FaShieldAlt className="text-[#F7B500]" size={28} />,
  'Style': <FaHome className="text-[#F7B500]" size={28} />,
  'Stylish Comfort': <FaHome className="text-[#F7B500]" size={28} />,
  'Affordability': <FaWallet className="text-[#F7B500]" size={28} />,
  'Affordable Living': <FaWallet className="text-[#F7B500]" size={28} />,
};

const coreValues = [
  {
    title: 'Safety First',
    subtitle: 'Your security and peace of mind are our top priorities.',
    icon: <FaShieldAlt className="text-[#F7B500]" size={28} />,
  },
  {
    title: 'Stylish Comfort',
    subtitle: 'Modern, cozy spaces designed for your lifestyle.',
    icon: <FaHome className="text-[#F7B500]" size={28} />,
  },
  {
    title: 'Affordable Living',
    subtitle: 'Premium living at prices you can afford.',
    icon: <FaWallet className="text-[#F7B500]" size={28} />,
  },
];

const CoreValues = () => (
  <section
    className="py-20"
    style={{
      background: 'linear-gradient(to bottom, #F8F6F2 0%, #FFFFFF 100%)',
    }}
  >
    <div className="max-w-5xl mx-auto px-4">
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
          Our Core Values
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {coreValues.map((value, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-[20px] shadow-lg border border-[rgba(13,27,42,0.1)] p-8 flex flex-col items-center transition-all duration-150 cursor-pointer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            whileHover={{ scale: 1.12, y: -6, boxShadow: '0 8px 32px 0 rgba(247,181,0,0.12)', borderColor: '#F7B500', transition: { duration: 0.06 } }}
          >
            <div className="mb-5">
              <span className="flex items-center justify-center w-14 h-14 rounded-full" style={{ background: '#0D1B2A' }}>
                {iconMap[value.title] || <FaShieldAlt className="text-[#F7B500]" size={28} />}
              </span>
            </div>
            <h3
              className="mb-2 font-bold text-center"
              style={{ color: '#0D1B2A', fontSize: '18px' }}
            >
              {value.title}
            </h3>
            <p
              className="text-center"
              style={{ color: '#2B2F36', fontSize: '14px', fontWeight: 500 }}
            >
              {value.description || value.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;
