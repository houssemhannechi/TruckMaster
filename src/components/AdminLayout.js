import React from 'react';
import Sidebar from './sidebar.js';
import { Bell, Search, User } from 'lucide-react';

const AdminLayout = ({ children, onLogout, currentView, onNavigate, isNewUser = false }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar 
        activeRoute={currentView}
        onNavigate={onNavigate}
        onLogout={onLogout}
        isNewUser={isNewUser}
      />
      
      {/* Main Content */}
      <div className="flex-grow-1" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        {/* Header/Navbar */}
        <header className="bg-white shadow-sm border-bottom">
          <div className="container-fluid">
            <div className="row align-items-center py-3">
              <div className="col-md-6">
                <h4 className="mb-0 text-capitalize fw-bold text-primary">
                  {currentView?.replace('-', ' ') || 'Dashboard'}
                </h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="#" className="text-decoration-none">Accueil</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {currentView?.replace('-', ' ') || 'Dashboard'}
                    </li>
                  </ol>
                </nav>
              </div>
              
              <div className="col-md-6">
                <div className="d-flex align-items-center justify-content-end">
                  {/* Search Bar */}
                  <div className="input-group me-3" style={{ maxWidth: '300px' }}>
                    <span className="input-group-text bg-light border-end-0">
                      <Search size={16} className="text-muted" />
                    </span>
                    <input 
                      type="text" 
                      className="form-control border-start-0" 
                      placeholder="Rechercher..."
                    />
                  </div>
                  
                  {/* Notifications */}
                  <button className="btn btn-outline-secondary me-3 position-relative">
                    <Bell size={18} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      3
                    </span>
                  </button>
                  
                  {/* User Profile */}
                  <div className="dropdown">
                    <button 
                      className="btn btn-outline-primary dropdown-toggle d-flex align-items-center" 
                      type="button" 
                      data-bs-toggle="dropdown"
                    >
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" 
                           style={{ width: '32px', height: '32px' }}>
                        <User size={16} className="text-white" />
                      </div>
                      <span className="fw-medium">
                        {isNewUser ? 'Nouvel Utilisateur' : 'Administrateur'}
                      </span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#" onClick={() => onNavigate('user-profile')}>
                          <User size={16} className="me-2" />
                          Mon Profil
                        </a>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <a className="dropdown-item text-danger" href="#" onClick={onLogout}>
                          Déconnexion
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Status Bar pour nouveaux utilisateurs */}
        {isNewUser && (
          <div className="bg-warning text-dark py-2">
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <strong className="me-2">⚠️ Compte non configuré:</strong>
                <span className="me-3">
                  Veuillez compléter votre profil et changer votre mot de passe pour accéder à toutes les fonctionnalités.
                </span>
                <button 
                  className="btn btn-sm btn-dark"
                  onClick={() => onNavigate('user-profile')}
                >
                  Configurer maintenant
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        <main className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              {children}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-top mt-auto py-3">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <small className="text-muted">
                  © 2025 TruckMaster. Tous droits réservés.
                </small>
              </div>
              <div className="col-md-6 text-end">
                <small className="text-muted">
                  Version 1.0.0 | Support: support@truckmaster.com
                </small>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
