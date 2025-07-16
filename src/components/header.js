import React from 'react';
import { Search, Bell, Globe, LogOut, Home, ChevronRight, User } from 'lucide-react';

const Header = ({ currentPage = "Dashboard", breadcrumbs = ["SuperAdmin"] }) => {
  return React.createElement('header', { className: 'admin-header' },
    React.createElement('div', { className: 'header-container' },
      // Logo et breadcrumbs
      React.createElement('div', { className: 'header-left' },
        React.createElement('div', { className: 'logo-container' },
          React.createElement('div', { className: 'logo' },
            React.createElement('span', { className: 'logo-text' }, 'TRANSPORT')
          )
        ),
        React.createElement('nav', { className: 'breadcrumbs' },
          React.createElement('div', { className: 'breadcrumb-item' },
            React.createElement(Home, { size: 16, className: 'breadcrumb-icon' })
          ),
          breadcrumbs.map((crumb, index) => 
            React.createElement('div', { key: index, className: 'breadcrumb-item' },
              React.createElement(ChevronRight, { size: 14, className: 'breadcrumb-separator' }),
              React.createElement('span', null, crumb)
            )
          ),
          React.createElement('div', { className: 'breadcrumb-item' },
            React.createElement(ChevronRight, { size: 14, className: 'breadcrumb-separator' }),
            React.createElement('span', { className: 'breadcrumb-current' }, currentPage)
          )
        )
      ),

      // Actions droite
      React.createElement('div', { className: 'header-right' },
        React.createElement('div', { className: 'search-container' },
          React.createElement('input', {
            type: 'text',
            placeholder: 'Search here',
            className: 'search-input'
          }),
          React.createElement(Search, { size: 18, className: 'search-icon' })
        ),
        
        React.createElement('div', { className: 'header-actions' },
          React.createElement('button', { className: 'header-btn user-btn' },
            React.createElement('div', { className: 'user-avatar' },
              React.createElement(User, { size: 18 })
            )
          ),
          React.createElement('button', { className: 'header-btn' },
            React.createElement(Globe, { size: 20 })
          ),
          React.createElement('button', { className: 'header-btn notification-btn' },
            React.createElement(Bell, { size: 20 }),
            React.createElement('span', { className: 'notification-badge' }, '1')
          ),
          React.createElement('button', { className: 'logout-btn' },
            React.createElement(LogOut, { size: 18 }),
            React.createElement('span', { className: 'logout-text' }, 'LOG OUT')
          )
        )
      )
    )
  );
};

export default Header;