import React from 'react';
import Header from './header.js';
import Sidebar from './sidebar.js';
import Footer from './footer.js';

const AdminLayout = ({ children, currentPage = "Dashboard", breadcrumbs = ["Manager"] }) => {
  return React.createElement('div', { className: 'admin-layout' },
    React.createElement(Header, { currentPage, breadcrumbs }),
    React.createElement('div', { className: 'admin-body' },
      React.createElement(Sidebar),
      React.createElement('main', { className: 'admin-main' },
        React.createElement('div', { className: 'admin-content' },
          children
        )
      )
    ),
    React.createElement(Footer)
  );
};

export default AdminLayout;