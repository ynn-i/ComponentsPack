import React from 'react';
import './Radio.css';

const Radio = ({ 
  name,
  value,
  checked = false,
  onChange,
  label = '',
  disabled = false,
  size = 'medium',
  className = '',
  ...props 
}) => {
  const radioId = `radio-${Math.random().toString(36).substr(2, 9)}`;
  const radioClasses = `radio-container radio-${size} ${className}`.trim();
  
  return (
    <div className={radioClasses}>
      <input
        id={radioId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="radio-input"
        {...props}
      />
      <label htmlFor={radioId} className="radio-label">
        <span className="radio-custom"></span>
        {label}
      </label>
    </div>
  );
};

// Radio Group component for managing multiple radio buttons
const RadioGroup = ({ 
  name, 
  value, 
  onChange, 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`radio-group ${className}`.trim()} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === Radio) {
          return React.cloneElement(child, {
            name,
            checked: child.props.value === value,
            onChange: (e) => onChange(e.target.value)
          });
        }
        return child;
      })}
    </div>
  );
};

Radio.Group = RadioGroup;

export default Radio;
