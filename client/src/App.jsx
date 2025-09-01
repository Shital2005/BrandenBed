import React, { useState } from 'react';
import LandingPage from './pages/LandingPage.jsx';
import Properties from './pages/Properties.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [lang, setLang] = useState('en');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage lang={lang} setLang={setLang} />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App
