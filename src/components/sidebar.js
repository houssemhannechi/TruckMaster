import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Users, 
  UserCheck, 
  Truck, 
  BarChart3,
  Settings,
  LogOut 
} from 'lucide-react';

const Sidebar = ({ activeRoute, onNavigate, onLogout, isNewUser = false }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Routes du menu
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'company-profile', label: 'Company Profile', icon: Building2 },
    { id: 'user-profile', label: 'User Profile', icon: UserCheck },
    { id: 'user-management', label: 'User Management', icon: Users },
    { id: 'vehicle-management', label: 'Vehicle Management', icon: Truck },
    { id: 'trip-management', label: 'Trip Management', icon: BarChart3 },
    { id: 'chat', label: 'Chat', icon: Settings }
  ];

  const handleItemClick = (item) => {
    // Si c'est un nouvel utilisateur, seul user-profile est accessible
    if (isNewUser && item.id !== 'user-profile') {
      return; // Ne rien faire si l'item est désactivé
    }
    onNavigate(item.id);
  };

  const getItemStyle = (item) => {
    const isActive = activeRoute === item.id;
    const isHovered = hoveredItem === item.id;
    const isDisabled = isNewUser && item.id !== 'user-profile';

    let baseClasses = "d-flex align-items-center p-3 text-decoration-none position-relative sidebar-item";
    
    if (isDisabled) {
      return {
        className: baseClasses + " text-muted",
        style: {
          cursor: 'not-allowed',
          opacity: 0.4,
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          margin: '4px 12px'
        }
      };
    }

    if (isActive) {
      return {
        className: baseClasses + " text-white",
        style: {
          backgroundColor: '#87CEEB', // Bleu ciel
          borderRadius: '8px',
          margin: '4px 12px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(135, 206, 235, 0.3)'
        }
      };
    }

    if (isHovered) {
      return {
        className: baseClasses + " text-dark",
        style: {
          backgroundColor: '#E0F6FF', // Bleu ciel très clair au survol
          borderRadius: '8px',
          margin: '4px 12px',
          cursor: 'pointer',
          transform: 'translateX(5px)'
        }
      };
    }

    return {
      className: baseClasses + " text-light",
      style: {
        cursor: 'pointer',
        margin: '4px 12px',
        borderRadius: '8px'
      }
    };
  };

  return (
    <div className="bg-dark text-white shadow-lg" style={{ width: '280px', minHeight: '100vh' }}>
      {/* Header */}
      <div className="p-4 border-bottom border-secondary">
        <div className="d-flex align-items-center">
          <Truck className="text-primary me-3" size={32} />
          <div>
            <h4 className="text-white mb-0">TruckMaster</h4>
            <small className="text-muted">
              {isNewUser ? 'Nouveau Utilisateur' : 'Système de Gestion'}
            </small>
          </div>
        </div>
      </div>

      {/* Alerte pour nouveaux utilisateurs */}
      {isNewUser && (
        <div className="alert alert-warning m-3" role="alert">
          <small>
            <strong>⚠️ Action requise :</strong><br/>
            Veuillez mettre à jour votre profil et changer votre mot de passe pour accéder à toutes les fonctionnalités.
          </small>
        </div>
      )}

      {/* Menu Items */}
      <nav className="py-3">
        {menuItems.map((item) => {
          const { className, style } = getItemStyle(item);
          const IconComponent = item.icon;
          const isDisabled = isNewUser && item.id !== 'user-profile';

          return (
            <div
              key={item.id}
              className={className}
              style={style}
              onClick={() => handleItemClick(item)}
              onMouseEnter={() => !isDisabled && setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <IconComponent size={20} className="me-3" />
              <span className="fw-medium">{item.label}</span>
              {isDisabled && (
                <span className="ms-auto">
                  <span className="badge bg-secondary">🔒</span>
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="position-absolute bottom-0 w-100 p-3">
        <div
          className="d-flex align-items-center p-3 text-decoration-none text-white sidebar-item"
          style={{
            cursor: 'pointer',
            borderRadius: '8px',
            backgroundColor: hoveredItem === 'logout' ? '#dc3545' : 'transparent',
            margin: '4px 12px'
          }}
          onClick={onLogout}
          onMouseEnter={() => setHoveredItem('logout')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <LogOut size={20} className="me-3" />
          <span className="fw-medium">Déconnexion</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

