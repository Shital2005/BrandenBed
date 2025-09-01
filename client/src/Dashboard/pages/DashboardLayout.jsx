import React from 'react';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
