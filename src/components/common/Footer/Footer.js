import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 30px 20px;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterCopyright = styled.div`
  color: #6c757d;
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

const Footer = ({
  copyright = '© 2024 Component Library',
  links = [],
  className = '',
}) => {
  return (
    <FooterContainer className={className}>
      <FooterContent>
        <FooterCopyright>{copyright}</FooterCopyright>
        {links.length > 0 && (
          <FooterLinks>
            {links.map((link, index) => (
              <FooterLink
                key={index}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.text}
              </FooterLink>
            ))}
          </FooterLinks>
        )}
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
