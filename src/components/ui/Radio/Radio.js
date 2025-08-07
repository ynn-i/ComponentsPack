import React from 'react';
import styled, { css } from 'styled-components';

const sizeStyles = {
  small: css`
    width: 14px;
    height: 14px;

    &::after {
      width: 4px;
      height: 4px;
    }
  `,
  medium: css`
    width: 18px;
    height: 18px;

    &::after {
      width: 6px;
      height: 6px;
    }
  `,
  large: css`
    width: 22px;
    height: 22px;

    &::after {
      width: 8px;
      height: 8px;
    }
  `,
};

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({ horizontal }) =>
    horizontal &&
    css`
      flex-direction: row;
      gap: 20px;
    `}
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family:
    'Pretendard',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Roboto',
    sans-serif;
  font-size: 14px;
  color: #333;
  margin: 0;

  /* size에 따라 폰트 크기 조정 */
  ${({ size = 'medium' }) =>
    size === 'small' &&
    css`
      font-size: 12px;
    `}

  ${({ size = 'medium' }) =>
    size === 'large' &&
    css`
      font-size: 16px;
    `}
`;

const RadioCustom = styled.span`
  position: relative;
  display: inline-block;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin-right: 8px;
  background-color: white;
  transition: all 0.2s ease-in-out;

  /* size에 따라 스타일 적용 */
  ${({ size = 'medium' }) => sizeStyles[size]};

  /* checked 상태 */
  ${({ checked }) =>
    checked &&
    css`
      border-color: #007bff;
      background-color: #007bff;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: white;
      }
    `}

  /* focus 상태 */
  ${({ focused }) =>
    focused &&
    css`
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    `}

  /* disabled 상태 */
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #f8f9fa;
      border-color: #ddd;
    `}
`;

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

  return (
    <RadioContainer size={size} className={className}>
      <RadioInput
        id={radioId}
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <RadioLabel htmlFor={radioId} size={size}>
        <RadioCustom size={size} checked={checked} disabled={disabled} />
        {label}
      </RadioLabel>
    </RadioContainer>
  );
};

// Radio Group component for managing multiple radio buttons
const RadioGroup = ({
  name,
  value,
  onChange,
  children,
  className = '',
  horizontal = false,
  ...props
}) => {
  return (
    <RadioGroupContainer
      horizontal={horizontal}
      className={className}
      {...props}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === Radio) {
          return React.cloneElement(child, {
            name,
            checked: child.props.value === value,
            onChange: e => onChange(e.target.value),
          });
        }
        return child;
      })}
    </RadioGroupContainer>
  );
};

Radio.Group = RadioGroup;

export default Radio;
