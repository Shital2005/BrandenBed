import React, { useState } from 'react';
import LandingPage from './pages/LandingPage.jsx';
import Properties from './pages/Properties.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn.jsx';
import { Dashboard, DashboardLayout } from './dashboard';
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
          <Route index element={<Dashboard lang={lang} setLang={setLang} />} />
          <Route path="properties" element={<div>Properties List & Filters (to implement)</div>} />
          <Route path="tasks" element={<div>Tasks (to implement)</div>} />
          <Route path="tenant-queries" element={<div>Tenant Queries (to implement)</div>} />
          <Route path="rent-collection" element={<div>Rent Collection (to implement)</div>} />
          <Route path="employees" element={<div>Employees (to implement)</div>} />
          <Route path="settings" element={<div>Settings (to implement)</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
