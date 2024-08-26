import PropTypes from 'prop-types';
import { useState } from 'react';

const FloatingInput = ({ label, value, onChange, type = 'text', isRequired = false, readOnly = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <div className="relative mb-4">
      <input
        type={type}
        value={value || ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full border rounded-lg outline-none py-2 px-4 transition-all duration-200 ${
            isFocused || value ? 'border-top-none' : 'border-gray-300'
          } ${isFocused || value ? 'input-focused' : ''}`}
      />
      <label
        className={`absolute left-3 px-1 duration-200 ${
          isFocused || value ? 'top-[-13px] text-blue-950 text-md' : 'top-2 text-gray-500'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

FloatingInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
  readOnly: PropTypes.bool,
};

export default FloatingInput;
