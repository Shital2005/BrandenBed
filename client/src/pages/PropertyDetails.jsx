import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PropertyDetails() {
  const { id } = useParams();
  // Hardcoded details for now
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 bg-white shadow-lg p-12">
          <h2 className="text-3xl font-bold mb-4 text-navy">Property Details</h2>
          <img src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Room" className="w-full h-64 object-cover rounded-xl mb-6" />
          <h3 className="text-xl font-bold mb-2 text-navy">Modern Studio in Mitte</h3>
          <p className="text-gray-700 mb-1">Friedrichstraße 155, 10117 Berlin</p>
          <p className="text-gold font-semibold mb-2">€950/mo</p>
          <p className="text-gray-600 text-sm mb-4">Bright, fully furnished studio apartment in the heart of Berlin. High-speed WiFi, utilities included.</p>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PropertyDetails;
