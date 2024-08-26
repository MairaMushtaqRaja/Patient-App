// ProgressIndicator.js
import React from 'react';

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-center mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === index
                ? 'bg-blue-950 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && <div className="w-8 h-1 bg-gray-300 mx-2"></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
