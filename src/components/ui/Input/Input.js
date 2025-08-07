import React from 'react';
import './Input.css';

const Input = ({ 
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  label = '',
  error = '',
  disabled = false,
  required = false,
  size = 'medium',
  className = '',
  ...props 
}) => {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  const inputClasses = `input input-${size} ${error ? 'input-error' : ''} ${className}`.trim();
  
  return (
    <div className="input-container">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        {...props}
      />
      {error && <div className="input-error-message">{error}</div>}
    </div>
  );
};

export default Input;
