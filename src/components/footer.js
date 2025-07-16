import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return React.createElement('footer', { className: 'admin-footer' },
    React.createElement('div', { className: 'footer-content' },
      React.createElement('div', { className: 'footer-left' },
        React.createElement('span', { className: 'footer-text' },
          '© 2025, made with ',
          React.createElement(Heart, { size: 14, className: 'heart-icon' }),
          ' by ',
          React.createElement('strong', null, 'Creative Tim'),
          ' & ',
          React.createElement('strong', null, 'UPDIVISION'),
          ' for a better web.'
        )
      ),
      React.createElement('div', { className: 'footer-right' },
        React.createElement('div', { className: 'footer-links' },
          React.createElement('a', { href: '#', className: 'footer-link' }, 'UPDIVISION'),
          React.createElement('a', { href: '#', className: 'footer-link' }, 'Creative Tim'),
          React.createElement('a', { href: '#', className: 'footer-link' }, 'About Us'),
          React.createElement('a', { href: '#', className: 'footer-link' }, 'Blog'),
          React.createElement('a', { href: '#', className: 'footer-link' }, 'License')
        )
      )
    )
  );
};

export default Footer;
