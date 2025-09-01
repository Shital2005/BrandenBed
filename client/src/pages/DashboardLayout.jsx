import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Properties', path: '/dashboard/properties' },
  { label: 'Tasks', path: '/dashboard/tasks' },
  { label: 'Tenant Queries', path: '/dashboard/tenant-queries' },
  { label: 'Rent Collection', path: '/dashboard/rent-collection' },
  { label: 'Employees', path: '/dashboard/employees' },
  { label: 'Settings', path: '/dashboard/settings' },
];

function DashboardLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-[#0D1B2A] text-white flex flex-col py-8 px-4 shadow-xl">
        <div className="mb-8 text-2xl font-extrabold text-[#F7B500]">Team Dashboard</div>
        <nav className="flex flex-col gap-2">
          {navItems.map(item => (
            <Link
              key={item.label}
              to={item.path}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-150 ${location.pathname === item.path ? 'bg-[#F7B500] text-[#0D1B2A]' : 'hover:bg-[#F7B500] hover:text-[#0D1B2A]'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
