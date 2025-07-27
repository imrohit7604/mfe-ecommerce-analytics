import React from 'react';
import "../Analytics.css";

const Analytics = ({ items = [] }) => {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold mb-2">📊 Analytics</h2>
      <p>Total Items: {items.length}</p>
      {items.length > 0 && (
        <div>
          <p>Last Item Added: {items[items.length - 1]}</p>
          <p>All Items: {items.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Analytics;
