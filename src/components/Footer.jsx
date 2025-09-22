import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="cnapp-footer">
      <p>&copy; {new Date().getFullYear()} CNAPP Dashboard. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
