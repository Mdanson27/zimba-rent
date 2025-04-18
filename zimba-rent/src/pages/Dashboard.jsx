import React from 'react';
import PropertyCard from '../components/PropertyCard.jsx';

const Dashboard = () => {
  const handleEdit = (title) => {
    alert(`Edit ${title}`);
  };

  const handleDelete = (title) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${title}?`);
    if (confirmDelete) {
      alert(`${title} deleted!`);
      // You’ll later replace this with Supabase delete logic
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Properties</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <PropertyCard
          title="3 Bedroom Apartment"
          location="Kira, Wakiso"
          rent={850000}
          status="Available"
          onEdit={() => handleEdit("3 Bedroom Apartment")}
          onDelete={() => handleDelete("3 Bedroom Apartment")}
        />
        <PropertyCard
          title="3 Bedroom Apartment"
          location="Kira, Wakiso"
          rent={850000}
          status="Available"
          onEdit={() => handleEdit("3 Bedroom Apartment")}
          onDelete={() => handleDelete("3 Bedroom Apartment")}
        />
          </div>
        </div>
      );
    };
    
    export default Dashboard;

