
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;


