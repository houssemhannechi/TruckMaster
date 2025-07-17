import React, { useState } from 'react';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import ForgotPassword from './components/ForgotPassword.js';
import AdminLayout from './components/AdminLayout.js';
import Dashboard from './components/dashboard.js';
import UserProfileUpdate from './components/components/UserProfileUpdate.js'; // Correction du chemin
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false); // Nouveau état pour détecter les nouveaux utilisateurs
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = (credentials) => {
    console.log('Login attempt:', credentials);
    
    // Simulation de la vérification d'authentification
    // Dans un vrai projet, ceci serait un appel API
    const mockUserData = {
      email: credentials.email,
      isFirstLogin: checkIfFirstLogin(credentials.email), // Fonction pour vérifier si c'est la première connexion
      name: credentials.email.split('@')[0],
      lastPasswordChange: checkLastPasswordChange(credentials.email)
    };
    
    setUserInfo(mockUserData);
    setIsAuthenticated(true);
    setIsNewUser(mockUserData.isFirstLogin);
    
    // Redirection automatique selon le statut de l'utilisateur
    if (mockUserData.isFirstLogin) {
      setCurrentView('user-profile'); // Redirection forcée vers la mise à jour du profil
    } else {
      setCurrentView('dashboard'); // Page normale
    }
  };

  // Fonction pour simuler la vérification de première connexion
  const checkIfFirstLogin = (email) => {
    // Dans un vrai projet, ceci serait un appel API
    // Pour la démo, on considère que les emails contenant "new" sont de nouveaux utilisateurs
    return email.includes('new') || email.includes('nouveau') || 
           localStorage.getItem(`user_${email}_configured`) !== 'true';
  };

  // Fonction pour vérifier la dernière modification du mot de passe
  const checkLastPasswordChange = (email) => {
    // Dans un vrai projet, ceci serait un appel API
    return localStorage.getItem(`user_${email}_last_password_change`) || null;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsNewUser(false);
    setUserInfo(null);
    setCurrentView('login');
  };

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  // Fonction appelée quand l'utilisateur termine la configuration de son profil
  const handleProfileConfigured = () => {
    if (userInfo) {
      localStorage.setItem(`user_${userInfo.email}_configured`, 'true');
      localStorage.setItem(`user_${userInfo.email}_last_password_change`, new Date().toISOString());
    }
    setIsNewUser(false); // L'utilisateur n'est plus considéré comme nouveau
    setCurrentView('dashboard'); // Redirection vers le dashboard
  };

  // Fonction pour rendre le contenu selon la vue actuelle
  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
        
      case 'user-profile':
        return (
          <UserProfileUpdate 
            userInfo={userInfo}
            isNewUser={isNewUser}
            onProfileConfigured={handleProfileConfigured}
          />
        );
        
      case 'company-profile':
        if (isNewUser) {
          return (
            <div className="alert alert-warning">
              <h4>Accès restreint</h4>
              <p>Veuillez d'abord configurer votre profil personnel avant d'accéder aux autres fonctionnalités.</p>
              <button className="btn btn-primary" onClick={() => navigateTo('user-profile')}>
                Configurer mon profil
              </button>
            </div>
          );
        }
        return (
          <div className="card">
            <div className="card-header">
              <h3>Profil Entreprise</h3>
            </div>
            <div className="card-body">
              <p>Gestion du profil de l'entreprise</p>
            </div>
          </div>
        );
        
      case 'user-management':
        if (isNewUser) {
          return (
            <div className="alert alert-warning">
              <h4>Accès restreint</h4>
              <p>Veuillez d'abord configurer votre profil personnel avant d'accéder aux autres fonctionnalités.</p>
              <button className="btn btn-primary" onClick={() => navigateTo('user-profile')}>
                Configurer mon profil
              </button>
            </div>
          );
        }
        return (
          <div className="card">
            <div className="card-header">
              <h3>Gestion des Utilisateurs</h3>
            </div>
            <div className="card-body">
              <p>Liste et gestion des utilisateurs</p>
            </div>
          </div>
        );
        
      case 'vehicle-management':
        if (isNewUser) {
          return (
            <div className="alert alert-warning">
              <h4>Accès restreint</h4>
              <p>Veuillez d'abord configurer votre profil personnel avant d'accéder aux autres fonctionnalités.</p>
              <button className="btn btn-primary" onClick={() => navigateTo('user-profile')}>
                Configurer mon profil
              </button>
            </div>
          );
        }
        return (
          <div className="card">
            <div className="card-header">
              <h3>Gestion des Véhicules</h3>
            </div>
            <div className="card-body">
              <p>Liste et gestion des véhicules</p>
            </div>
          </div>
        );
        
      case 'trip-management':
        if (isNewUser) {
          return (
            <div className="alert alert-warning">
              <h4>Accès restreint</h4>
              <p>Veuillez d'abord configurer votre profil personnel avant d'accéder aux autres fonctionnalités.</p>
              <button className="btn btn-primary" onClick={() => navigateTo('user-profile')}>
                Configurer mon profil
              </button>
            </div>
          );
        }
        return (
          <div className="card">
            <div className="card-header">
              <h3>Gestion des Trajets</h3>
            </div>
            <div className="card-body">
              <p>Suivi et gestion des trajets</p>
            </div>
          </div>
        );
        
      case 'chat':
        if (isNewUser) {
          return (
            <div className="alert alert-warning">
              <h4>Accès restreint</h4>
              <p>Veuillez d'abord configurer votre profil personnel avant d'accéder aux autres fonctionnalités.</p>
              <button className="btn btn-primary" onClick={() => navigateTo('user-profile')}>
                Configurer mon profil
              </button>
            </div>
          );
        }
        return (
          <div className="card">
            <div className="card-header">
              <h3>Chat</h3>
            </div>
            <div className="card-body">
              <p>Messagerie interne</p>
            </div>
          </div>
        );
        
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <>
          {currentView === 'login' && (
            <Login onLogin={handleLogin} onNavigateTo={navigateTo} />
          )}
          {currentView === 'signup' && (
            <SignUp onNavigateTo={navigateTo} />
          )}
          {currentView === 'forgot-password' && (
            <ForgotPassword onNavigateTo={navigateTo} />
          )}
        </>
      ) : (
        <AdminLayout 
          onLogout={handleLogout} 
          currentView={currentView}
          onNavigate={navigateTo}
          isNewUser={isNewUser}
        >
          {renderContent()}
        </AdminLayout>
      )}
    </div>
  );
}

export default App;
