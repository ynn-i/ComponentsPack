import React from 'react';
import styled, { css } from 'styled-components';

const variantStyles = {
  primary: css`
    background-color: #000000;
    color: white;

    &:hover:not(:disabled) {
      background-color: #222222;
    }

    &:active:not(:disabled) {
      background-color: rgba(255, 0, 208, 0.6);
    }
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;

    &:hover:not(:disabled) {
      background-color: #545b62;
    }

    &:active:not(:disabled) {
      background-color: #343a40;
    }
  `,
  success: css`
    background-color: #28a745;
    color: white;

    &:hover:not(:disabled) {
      background-color: #1e7e34;
    }

    &:active:not(:disabled) {
      background-color: #155724;
    }
  `,
  danger: css`
    background-color: #dc3545;
    color: white;

    &:hover:not(:disabled) {
      background-color: #c82333;
    }

    &:active:not(:disabled) {
      background-color: #bd2130;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #000000;
    border: 1px solid #dfe0e7;

    &:hover:not(:disabled) {
      background-color: #f3f3f6;
      color: #000000;
    }

    &:active:not(:disabled) {
      background-color: #transparent;
      border-color: rgba(255, 0, 208, 0.6);
    }
  `,
};

const sizeStyles = {
  small: css`
    padding: 6px 12px;
    font-size: 12px;
    min-height: 28px;
    border-radius: 8px;
  `,
  medium: css`
    padding: 8px 16px;
    font-size: 14px;
    min-height: 36px;
    border-radius: 12px;
  `,
  large: css`
    padding: 12px 24px;
    font-size: 16px;
    min-height: 44px;
    border-radius: 16px;
  `,
};

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  font-family:
    'Pretendard',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Roboto',
    sans-serif;
  font-weight: 500;
  // transition: all 0.1s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  outline: none;

  /* variant에 따라 스타일 적용 */
  ${({ variant = 'primary' }) => variantStyles[variant]};

  /* size에 따라 스타일 적용 */
  ${({ size = 'medium' }) => sizeStyles[size]};

  /* focus 상태 */
  &:focus {
    border: 1px solid rgba(255, 0, 208, 0.6);
    outline: 4px solid rgba(255, 0, 208, 0.1);
    outline-offset: 0px;
  }

  /* disabled 상태 */
  &:disabled {
    background-color: #eeeeee !important;
    color: #666666 !important;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
