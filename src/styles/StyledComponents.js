import styled from 'styled-components';

// Main Container
export const MainContainer = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: 100vh;
`;

// Content Container
export const ContentContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  align-content: stretch;
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;
  justify-content: flex-start;
  left: 0;
  padding: 0;
  top: 128px;
  width: 1920px;

  @media (max-width: 1920px) {
    width: 100%;
  }
`;

// Header Section
export const HeaderSection = styled.div`
  box-sizing: border-box;
  align-content: stretch;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  line-height: 0;
  font-style: normal;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  white-space: nowrap;
`;

// Header Title
export const HeaderTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  position: relative;
  flex-shrink: 0;
  color: #222222;
  font-size: 24px;
  text-align: left;
  white-space: nowrap;

  p {
    display: block;
    line-height: normal;
    white-space: pre;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Header Subtitle
export const HeaderSubtitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 1.3;
  position: relative;
  flex-shrink: 0;
  color: #a3a5ae;
  font-size: 18px;
  text-align: center;
  white-space: pre;

  p {
    display: block;
    margin: 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Components Grid
export const ComponentsGrid = styled.div`
  box-sizing: border-box;
  align-content: stretch;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 80px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  box-sizing : border-box;

  &::before {
    content: '';
    position: absolute;
    border: 1px 0px 0px solid #dae1ea;
    inset: 0;
    pointer-events: none;
  }

  @media (max-width: 1920px) {
    padding: 80px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Component Row
export const ComponentRow = styled.div`s
  box-sizing: border-box;
  align-content: stretch;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  box-sizing : border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Component Column
export const ComponentColumn = styled.div`
  flex-basis: 0;
  box-sizing: border-box;
  align-content: stretch;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 1px;
  min-width: 1px;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  flex-grow: 1;
`;

// Component Title
export const ComponentTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #222222;
  font-size: 14px;
  text-align: left;
  white-space: nowrap;

  p {
    display: block;
    white-space: pre;
    margin: 0;
  }
`;

// Component Row Container
export const ComponentRowContainer = styled.div`
  box-sizing: border-box;
  align-content: stretch;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

// Toggle Switch
export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  color: #222222;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover .toggle-slider {
    background-color: #d1d5db;
  }

  &:hover input:checked + .toggle-slider {
    background-color: #0056b3;
  }

  &:hover input:disabled + .toggle-slider {
    background-color: #e5e7eb;
  }
`;

// Toggle Slider
export const ToggleSlider = styled.span`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background-color: #e5e7eb;
  border-radius: 12px;
  margin-right: 8px;
  transition: all 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  ${ToggleSwitch} input:checked + & {
    background-color: #007bff;
  }

  ${ToggleSwitch} input:checked + &::before {
    transform: translateX(20px);
  }

  ${ToggleSwitch} input:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  ${ToggleSwitch} input:disabled + & {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Toggle Variants */
  &.toggle-fill {
    background-color: #007bff;
  }

  &.toggle-fill::before {
    background-color: white;
  }

  &.toggle-ghost {
    background-color: transparent;
    border: 2px solid #e5e7eb;
  }

  &.toggle-ghost::before {
    background-color: #e5e7eb;
  }

  /* Toggle Sizes */
  &.toggle-small {
    width: 36px;
    height: 20px;
  }

  &.toggle-small::before {
    width: 16px;
    height: 16px;
  }

  ${ToggleSwitch} input:checked + &.toggle-small::before {
    transform: translateX(16px);
  }

  &.toggle-medium {
    width: 44px;
    height: 24px;
  }

  &.toggle-medium::before {
    width: 20px;
    height: 20px;
  }

  ${ToggleSwitch} input:checked + &.toggle-medium::before {
    transform: translateX(20px);
  }

  &.toggle-large {
    width: 52px;
    height: 28px;
  }

  &.toggle-large::before {
    width: 24px;
    height: 24px;
  }

  ${ToggleSwitch} input:checked + &.toggle-large::before {
    transform: translateX(24px);
  }
`;

// Disabled Text
export const DisabledText = styled.span`
  ${ToggleSwitch} input:disabled ~ & {
    color: #6c757d;
    cursor: not-allowed;
  }
`;
