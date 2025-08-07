import React from 'react';
import styled, { css } from 'styled-components';

const sizeStyles = {
  small: css`
    padding: 6px 10px;
    font-size: 12px;
    min-height: 28px;
  `,
  medium: css`
    padding: 8px 12px;
    font-size: 14px;
    min-height: 36px;
  `,
  large: css`
    padding: 12px 16px;
    font-size: 16px;
    min-height: 44px;
  `,
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`;

const Required = styled.span`
  color: #dc3545;
  margin-left: 4px;
`;

const StyledInput = styled.input`
  border: 2px solid #ddd;
  border-radius: 6px;
  font-family:
    'Pretendard',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Roboto',
    sans-serif;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  outline: none;
  background-color: white;

  /* size에 따라 스타일 적용 */
  ${({ size = 'medium' }) => sizeStyles[size]};

  /* focus 상태 */
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  /* disabled 상태 */
  &:disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
  }

  /* error 상태 */
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #dc3545;

      &:focus {
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
      }
    `}

  /* placeholder 스타일링 */
  &::placeholder {
    color: #6c757d;
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
`;

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

  return (
    <InputContainer>
      {label && (
        <InputLabel htmlFor={inputId}>
          {label}
          {required && <Required>*</Required>}
        </InputLabel>
      )}
      <StyledInput
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        size={size}
        hasError={!!error}
        className={className}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
