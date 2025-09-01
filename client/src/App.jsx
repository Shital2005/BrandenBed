import React, { useState } from 'react';
import LandingPage from './pages/LandingPage.jsx';
import Properties from './pages/Properties.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn.jsx';
import DashboardLayout from './Dashboard/pages/DashboardLayout';
import DashboardHome from './Dashboard/pages/DashboardHome';
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
  <Route path="/signin" element={<SignIn lang={lang} setLang={setLang} />} />
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="rent" element={<div>Rent Collection (to implement)</div>} />
          <Route path="queries" element={<div>Tenant Queries (to implement)</div>} />
          <Route path="properties" element={<div>Properties List & Filters (to implement)</div>} />
          <Route path="employees" element={<div>Employees (to implement)</div>} />
          <Route path="settings" element={<div>Settings (to implement)</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
