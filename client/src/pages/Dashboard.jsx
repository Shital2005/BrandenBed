import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Dashboard({ lang, setLang }) {
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main className="min-h-screen flex flex-col items-center justify-center bg-white py-24 px-4">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 border border-gold text-center">
          <h2 className="text-4xl font-bold mb-6 text-navy">Welcome to the Dashboard!</h2>
          <p className="text-lg text-gray-700">You are now signed in.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
