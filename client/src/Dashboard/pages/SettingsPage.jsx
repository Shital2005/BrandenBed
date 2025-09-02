import React, { useState } from "react";

const SettingsPage = () => {
  const [theme, setTheme] = useState(false); // false: Light, true: Dark
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-100 flex flex-col items-center p-8">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10 border-4 border-yellow-400">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-900 tracking-tight text-center">Settings</h2>
        {/* Change Password Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-5 text-blue-700">Change Password</h3>
          <form className="flex flex-col gap-5">
            <input type="password" placeholder="Current Password" className="px-5 py-3 rounded-xl border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <input type="password" placeholder="New Password" className="px-5 py-3 rounded-xl border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <input type="password" placeholder="Confirm New Password" className="px-5 py-3 rounded-xl border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <button type="button" className="bg-yellow-400 text-black font-bold py-3 rounded-xl mt-2 shadow hover:bg-yellow-500 transition">Change (dummy)</button>
          </form>
        </div>
        {/* Enable Notifications Toggle */}
        <div className="mb-10 flex items-center justify-between">
          <span className="text-xl text-blue-700 font-bold">Enable Notifications</span>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} className="sr-only" />
              <div className={`block w-14 h-8 rounded-full ${notifications ? 'bg-blue-600' : 'bg-gray-300'} transition-all`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow transition-transform duration-300 ${notifications ? 'translate-x-6' : ''}`}></div>
            </div>
          </label>
        </div>
        {/* Theme Toggle */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xl text-blue-700 font-bold">Theme</span>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" checked={theme} onChange={() => setTheme(!theme)} className="sr-only" />
              <div className={`block w-14 h-8 rounded-full ${theme ? 'bg-gray-800' : 'bg-yellow-300'} transition-all`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow transition-transform duration-300 ${theme ? 'translate-x-6' : ''}`}></div>
            </div>
            <span className={`ml-4 font-bold text-lg ${theme ? 'text-gray-800' : 'text-yellow-600'}`}>{theme ? 'Dark' : 'Light'}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
