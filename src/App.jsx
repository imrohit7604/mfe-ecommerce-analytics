import React, { useState } from 'react';
import "./App.css";
import Analytics from './components/Analytics';

const App = () => {
  const [cartItems, setCartItems] = useState(['Shoes', 'Watch', 'Belt']);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Analytics MFE (Standalone)</h1>
      <Analytics items={cartItems} />
    </div>
  );
};

export default App;
