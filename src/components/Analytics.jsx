import React from 'react';
import "../Analytics.css";

const Analytics = ({ items = [] }) => {
  return (
    <div className="analytics-container">
      <h2 className="analytics-title">📊 Analytics</h2>
      <div className="analytics-data">
        <p>
          <strong>Total Items:</strong>
          {items.length}
        </p>
        {items.length > 0 && (
          <>
            <p>
              <strong>Last Item Added:</strong>
              {items[items.length - 1]}
            </p>
            <p><strong>All Items:</strong> {items.join(', ')}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Analytics;
