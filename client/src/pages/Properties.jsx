import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/properties')
      .then(res => res.json())
      .then(data => {
        setProperties(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10 text-center text-navy">Available Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {properties.map(property => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg border border-gold p-6 flex flex-col">
                <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold text-navy mb-2">{property.title}</h3>
                <p className="text-gray-700 mb-1">{property.address}</p>
                <p className="text-gold font-semibold mb-2">{property.price}</p>
                <p className="text-gray-600 text-sm mb-4">{property.description}</p>
                <Link
                  to={`/property/${property.id}`}
                  className="mt-auto px-4 py-2 rounded-full bg-gold text-navy font-semibold hover:bg-navy hover:text-gold transition-colors duration-150 text-center"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Properties;
