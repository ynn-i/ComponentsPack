import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 0 15px;
  }
`;

const FormHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const FormTitle = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
`;

const FormDescription = styled.p`
  margin: 0;
  color: #6c757d;
  font-size: 14px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;

  .input-container {
    flex: 1;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
`;

const Form = ({
  children,
  onSubmit,
  className = '',
  title = '',
  description = '',
  ...props
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <FormContainer className={className} onSubmit={handleSubmit} {...props}>
      {(title || description) && (
        <FormHeader>
          {title && <FormTitle>{title}</FormTitle>}
          {description && <FormDescription>{description}</FormDescription>}
        </FormHeader>
      )}
      <FormContent>{children}</FormContent>
    </FormContainer>
  );
};

// Export styled components for use in other components
Form.Row = FormRow;
Form.Actions = FormActions;

export default Form;
