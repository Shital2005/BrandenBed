import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SignIn({ lang, setLang }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@demo.com' && password === 'password123') {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-24 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gold">
          <h2 className="text-3xl font-bold mb-6 text-center text-navy">Sign In</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:border-gold focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:border-gold focus:outline-none"
              required
            />
            {error && <div className="text-red-600 text-sm text-center">{error}</div>}
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gold text-navy font-bold hover:bg-navy hover:text-gold transition-colors duration-150"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
