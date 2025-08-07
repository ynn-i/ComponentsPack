import React from 'react';
import './Footer.css';

const Footer = ({ 
  copyright = '© 2024 Component Library', 
  links = [],
  className = '' 
}) => {
  return (
    <footer className={`footer ${className}`.trim()}>
      <div className="footer-content">
        <div className="footer-copyright">
          {copyright}
        </div>
        {links.length > 0 && (
          <div className="footer-links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="footer-link"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
