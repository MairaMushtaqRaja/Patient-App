// src/components/BillingSystem.jsx
import React from 'react';

function BillingSystem() {
  return (
    <div>
      <form className="space-y-4">
        <div>
          <label className="block">Balance:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Cash Paid:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">SMS:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">WA:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Discount:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Total Bill:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
      </form>
    </div>
  );
}

export default BillingSystem;
