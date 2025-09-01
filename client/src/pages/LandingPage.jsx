import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero';
import QuickStats from '../components/QuickStats';
import CoreValues from '../components/CoreValues';
import Services from '../components/Services';
import Footer from '../components/Footer';

function LandingPage({ lang, setLang }) {
  const [landingData, setLandingData] = useState({ stats: [], coreValues: [], services: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/landing')
      .then(res => res.json())
      .then(data => {
        setLandingData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <QuickStats stats={landingData.stats} />
      <CoreValues coreValues={landingData.coreValues} />
      <Services services={landingData.services} />
      <Footer />
    </div>
  );
}

export default LandingPage;
