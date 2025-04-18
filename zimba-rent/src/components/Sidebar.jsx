import React from 'react';

// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">ZimbaRent</h2>
      <ul>
        <li className="mb-4"><a href="#" className="hover:text-gray-200">Dashboard</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-200">Properties</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-200">Tenant Applications</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-200">Payments</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

