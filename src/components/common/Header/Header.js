import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 40px 20px;
  color: white;
  text-align: center;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderTitle = styled.h1`
  margin: 0 0 10px 0;
  font-size: 2.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeaderSubtitle = styled.p`
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.9;
`;

const Header = ({
  title = 'Component Library',
  subtitle = 'A showcase of reusable React components',
}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
        {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
