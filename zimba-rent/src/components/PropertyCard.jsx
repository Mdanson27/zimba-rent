import React from 'react';

const PropertyCard = ({ title, location, rent, status, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-semibold mb-1">{title}</h4>
          <p className="text-gray-600 text-sm mb-1">📍 {location}</p>
          <p className="text-gray-800 font-medium text-sm">UGX {rent.toLocaleString()}</p>
          <p className={`mt-2 text-sm font-semibold ${
            status === 'Available' ? 'text-green-600' : 'text-red-500'
          }`}>
            {status}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <button
            onClick={onEdit}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

