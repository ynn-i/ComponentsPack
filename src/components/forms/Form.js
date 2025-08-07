import React from 'react';
import './Form.css';

const Form = ({ 
  children, 
  onSubmit, 
  className = '', 
  title = '',
  description = '',
  ...props 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form className={`form ${className}`.trim()} onSubmit={handleSubmit} {...props}>
      {(title || description) && (
        <div className="form-header">
          {title && <h2 className="form-title">{title}</h2>}
          {description && <p className="form-description">{description}</p>}
        </div>
      )}
      <div className="form-content">
        {children}
      </div>
    </form>
  );
};

export default Form;
