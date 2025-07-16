import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Truck, 
  FileText, 
  MessageSquare, 
  Calendar,
  Settings,
  HelpCircle 
} from 'lucide-react';

const Sidebar = ({ onNavigate, currentPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Users, label: 'Utilisateurs' },
    { icon: Truck, label: 'Véhicules' },
    { icon: FileText, label: 'Documents' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Calendar, label: 'Planning' },
    { icon: Settings, label: 'Paramètres' },
    { icon: HelpCircle, label: 'Aide' }
  ];

  return React.createElement('aside', { 
    className: `admin-sidebar ${isExpanded ? 'expanded' : ''}`,
    onMouseEnter: () => setIsExpanded(true),
    onMouseLeave: () => setIsExpanded(false)
  },
    React.createElement('div', { className: 'sidebar-content' },
      React.createElement('nav', { className: 'sidebar-nav' },
        menuItems.map((item, index) => 
          React.createElement('div', { 
            key: index, 
            className: `sidebar-item ${currentPage === item.label ? 'active' : ''}`,
            onClick: () => onNavigate && onNavigate(item.label) 
          },
            React.createElement('div', { className: 'sidebar-icon' },
              React.createElement(item.icon, { size: 22 })
            ),
            React.createElement('span', { className: 'sidebar-label' }, item.label),
            React.createElement('div', { className: 'sidebar-tooltip' }, item.label)
          )
        )
      )
    )
  );
};

export default Sidebar;
