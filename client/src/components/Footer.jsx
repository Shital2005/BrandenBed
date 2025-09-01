
import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaPinterest, FaFacebook, FaTwitter } from "react-icons/fa";

const links = [
  { label: 'Properties', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Contact', href: '#' },
];

const Footer = () => (
  <footer className="bg-[#0D1B2A] text-white pt-12 pb-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            {/* Gold logo placeholder */}
            <span className="text-3xl font-extrabold" style={{ color: '#F7B500' }}>BrandenBed</span>
          </div>
          <p className="text-sm text-gray-200 max-w-xs">
            Safe, stylish, affordable living for students and professionals.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold mb-3 text-lg">Quick Links</h4>
          <ul className="mb-4">
            {links.map(link => (
              <li key={link.label} className="mb-2">
                <a
                  href={link.href}
                  className="text-white hover:text-[#F7B500] transition-colors duration-150"
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
         
        </div>
        {/* Contact */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold mb-3 text-lg">Contact</h4>
          <p className="mb-1">contact@brandenbedlivingspaces.com</p>
          <p className="mb-1">+49 176 88317580</p>
          <p className="mb-3">Friedrichstraße 155, 10117 Berlin</p>
           <div className="flex gap-3 mt-2">
             <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-[#F7B500] hover:bg-[#F7B500] transition-colors duration-150">
               <FaLinkedin className="text-[#0D1B2A]" />
             </a>
             <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-[#F7B500] hover:bg-[#F7B500] transition-colors duration-150">
               <FaInstagram className="text-[#0D1B2A]" />
             </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-[#F7B500] hover:bg-[#F7B500] transition-colors duration-150">
              <FaPinterest className="text-[#0D1B2A]" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-[#F7B500] hover:bg-[#F7B500] transition-colors duration-150">
              <FaFacebook className="text-[#0D1B2A]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-[#F7B500] hover:bg-[#F7B500] transition-colors duration-150">
              <FaTwitter className="text-[#0D1B2A]" />
            </a>
           </div>
        </div>
      </div>
      {/* Bottom strip */}
      <div className="border-t" style={{ borderColor: '#F7B500', borderWidth: '2px' }}></div>
      <div className="text-center pt-4 text-sm" style={{ color: '#C4C4C4' }}>
        © 2025 BrandenBed Living Spaces UG. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
