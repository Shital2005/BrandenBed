import React from 'react'

function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-semibold mb-4">BrandenBed</h3>
						<p className="text-gray-300 mb-4">
							Your trusted partner for finding the perfect space in Berlin.
						</p>
						<div className="space-y-2 text-gray-300">
							<p>📍 Berlin-Charlottenburg, Germany</p>
							<p>📞 +49 30 1234 5678</p>
							<p>✉️ info@brandenbed.de</p>
						</div>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2 text-gray-300">
							<li><a href="#properties" className="hover:text-white">Properties</a></li>
							<li><a href="#about" className="hover:text-white">About Us</a></li>
							<li><a href="#services" className="hover:text-white">Services</a></li>
							<li><a href="#contact" className="hover:text-white">Contact</a></li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-300 hover:text-white text-2xl">📘</a>
							<a href="#" className="text-gray-300 hover:text-white text-2xl">📷</a>
							<a href="#" className="text-gray-300 hover:text-white text-2xl">🐦</a>
							<a href="#" className="text-gray-300 hover:text-white text-2xl">💼</a>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
					<p>&copy; 2024 BrandenBed Living Spaces UG. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
