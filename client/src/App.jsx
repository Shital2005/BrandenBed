import React, { useState } from 'react';
import LandingPage from './pages/LandingPage.jsx';
import PropertiesPage from './Dashboard/pages/PropertiesPage.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn.jsx';
import EmployeesPage from './Dashboard/pages/EmployeesPage.jsx';
import DashboardLayout from './Dashboard/pages/DashboardLayout';
import DashboardHome from './Dashboard/pages/DashboardHome';
import RentCollectionPage from './Dashboard/pages/RentCollectionPage';
import TenantQueriesPage from './Dashboard/pages/TenantQueriesPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [lang, setLang] = useState('en');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage lang={lang} setLang={setLang} />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn lang={lang} setLang={setLang} />} />
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="rent-collection" element={<RentCollectionPage />} />
          <Route path="tenant-queries" element={<TenantQueriesPage />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="settings" element={<div>Settings (to implement)</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
