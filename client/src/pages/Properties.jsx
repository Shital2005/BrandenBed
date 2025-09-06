import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://brandenbed-1x55.onrender.com/api/properties')
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
            {properties.map((property, idx) => {
              // Unsplash interior room images
              const unsplashImages = [
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Modern living room
                "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80", // Cozy bedroom
                "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80", // Stylish kitchen
                "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80", // Elegant dining area
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80", // Bright workspace
              ];
              const imageSrc = property.image && property.image.trim() !== "" ? property.image : unsplashImages[idx % unsplashImages.length];
              return (
                <div key={property.id} className="bg-white rounded-2xl shadow-lg border border-gold p-6 flex flex-col">
                  <img src={imageSrc} alt={property.title} className="w-full h-56 object-cover rounded-xl mb-4" />
                  <h3 className="text-2xl font-bold text-navy mb-2">{property.title}</h3>
                  <p className="text-gray-700 mb-1 text-lg"><span className="font-semibold">Address:</span> {property.address}</p>
                  <p className="text-gold font-semibold mb-2 text-lg"><span className="font-semibold">Price:</span> {property.price}</p>
                  <p className="text-gray-600 text-base mb-2"><span className="font-semibold">Type:</span> {property.type || "Apartment"}</p>
                  <p className="text-gray-600 text-base mb-4"><span className="font-semibold">Description:</span> {property.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-navy text-white px-3 py-1 rounded-full text-xs">Beds: {property.beds || 2}</span>
                    <span className="bg-gold text-navy px-3 py-1 rounded-full text-xs">Baths: {property.baths || 1}</span>
                    <span className="bg-gray-200 text-navy px-3 py-1 rounded-full text-xs">Area: {property.area || "60m²"}</span>
                  </div>
                  <Link
                    to={`/property/${property.id}`}
                    className="mt-auto px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 hover:text-black transition-colors duration-150 text-center"
                  >
                    View Details
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Properties;