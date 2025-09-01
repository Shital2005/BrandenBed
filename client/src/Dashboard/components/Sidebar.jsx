import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Properties', path: '/dashboard/properties' },
  { label: 'Tasks', path: '/dashboard/tasks' },
  { label: 'Tenant Queries', path: '/dashboard/tenant-queries' },
  { label: 'Rent Collection', path: '/dashboard/rent-collection' },
  { label: 'Employees', path: '/dashboard/employees' },
  { label: 'Settings', path: '/dashboard/settings' },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0D1B2A] text-white flex flex-col py-8 px-4 shadow-xl z-40">
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
  );
};

export default Sidebar;
