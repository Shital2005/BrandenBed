import React from 'react'

function Footer() {
  return (
  <footer className="bg-sand text-navy py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-accent">Brandenbed Living Spaces UG (haftungsbeschränkt)</h3>
            <p className="text-gray-700 mb-4">Berlin</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Our Locations</a></li>
              <li><a href="#landlords" className="hover:text-white transition-colors">Landlords</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Business Registered Address</li>
              <li>Büro</li>
              <li><a href="mailto:contact@brandenbedlivingspaces.com" className="hover:text-white transition-colors">contact@brandenbedlivingspaces.com</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
  <div className="mt-8 pt-8 border-t border-accent-light">
          <h3 className="text-lg font-semibold mb-4 text-accent">Connect With Us</h3>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">WhatsApp</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">TikTok</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pinterest</a>
          </div>
        </div>

        {/* Copyright */}
  <div className="mt-8 pt-8 border-t border-accent-light text-center text-gray-700">
          <p className="mb-4 text-accent">&copy; 2025 Brandenbed Living Spaces. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
