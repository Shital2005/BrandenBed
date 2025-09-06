import React, { useEffect, useState } from "react";

const dummyTypes = ["All", "Studio", "Room", "Loft"];
const theme = {
  navy: "#0D1B2A",
  yellow: "#F7B500"
};

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [type, setType] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newProperty, setNewProperty] = useState({ title: "", address: "", price: "", image: "", description: "" });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/properties`);
        if (res.ok) {
          const data = await res.json();
          setProperties(data);
        }
      } catch {}
    };
    fetchProperties();
  }, []);

  const openModal = (property) => {
    setSelectedProperty(property);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProperty(null);
  };

  // Filter by type (simple logic: checks if type is in title)
  const filteredProperties = type === "All"
    ? properties
    : properties.filter(p => p.title.toLowerCase().includes(type.toLowerCase()));

  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 tracking-tight">Properties</h2>
        <div className="mb-6 flex items-center gap-4">
          <label className="font-semibold" style={{ color: theme.navy }}>Filter by type:</label>
          <select className="px-4 py-2 rounded-xl border border-yellow-400" value={type} onChange={e => setType(e.target.value)}>
            {dummyTypes.map(t => <option key={t}>{t}</option>)}
          </select>
          <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-xl shadow hover:bg-yellow-500 transition" onClick={() => setAddModalOpen(true)}>Add Property</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-2xl shadow-xl border border-yellow-400 p-6 flex flex-col">
              <img src={property.image} alt={property.title} className="rounded-xl mb-4 h-40 object-cover border-4 border-yellow-400" />
              <div className="font-bold text-xl mb-2" style={{ color: theme.navy }}>{property.title}</div>
              <div className="text-gray-700 mb-1">{property.address}</div>
              <div className="font-semibold mb-2" style={{ color: theme.navy }}>{property.price}</div>
              <div className="text-gray-600 mb-4">{property.description}</div>
              <button className="bg-yellow-400 text-black font-bold py-2 rounded-xl mt-auto shadow hover:bg-yellow-500 transition" onClick={() => openModal(property)}>Edit</button>
            </div>
          ))}
        </div>
      </div>
      {/* Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-4 border-yellow-400">
            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.navy }}>Edit Property</h3>
            <form className="flex flex-col gap-4">
              <input className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Title" value={selectedProperty?.title || ""} readOnly />
              <input className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Address" value={selectedProperty?.address || ""} readOnly />
              <input className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Price" value={selectedProperty?.price || ""} readOnly />
              <textarea className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Description" value={selectedProperty?.description || ""} readOnly />
              <button type="button" className="bg-yellow-400 text-black font-bold py-2 rounded-xl mt-2" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      )}
      {/* Add Modal */}
      {addModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-4 border-yellow-400">
            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.navy }}>Add Property</h3>
            <form className="flex flex-col gap-4">
              <input className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Title" value={newProperty.title} onChange={e => setNewProperty({ ...newProperty, title: e.target.value })} />
              <input className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Address" value={newProperty.address} onChange={e => setNewProperty({ ...newProperty, address: e.target.value })} />
              <input className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Price" value={newProperty.price} onChange={e => setNewProperty({ ...newProperty, price: e.target.value })} />
              <input className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Image URL" value={newProperty.image} onChange={e => setNewProperty({ ...newProperty, image: e.target.value })} />
              <textarea className="px-4 py-2 rounded-xl border border-yellow-400" placeholder="Description" value={newProperty.description} onChange={e => setNewProperty({ ...newProperty, description: e.target.value })} />
              <button type="button" className="bg-yellow-400 text-black font-bold py-2 rounded-xl mt-2" onClick={() => { setAddModalOpen(false); setNewProperty({ title: "", address: "", price: "", image: "", description: "" }); }}>Add (dummy)</button>
              <button type="button" className="bg-blue-700 text-white font-bold py-2 rounded-xl mt-2" onClick={() => setAddModalOpen(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertiesPage;
