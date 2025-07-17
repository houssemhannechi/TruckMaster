
import React, { useState } from 'react';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import ForgotPassword from './components/ForgotPassword.js';
import AdminLayout from './components/AdminLayout.js';
import Dashboard from './components/dashboard.js';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (credentials) => {
    // Simulation de connexion réussie
    console.log('Login attempt:', credentials);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  if (isAuthenticated) {
    return React.createElement('div', { className: 'split-background' },
      React.createElement(AdminLayout, { 
        currentPage: "Dashboard", 
        breadcrumbs: ["Manager"] 
      },
        React.createElement(Dashboard)
      )
    );
  }

  const renderAuthView = () => {
    switch (currentView) {
      case 'login':
        return React.createElement(Login, {
          onSwitchToSignup: () => setCurrentView('signup'),
          onSwitchToForgotPassword: () => setCurrentView('forgot-password'),
          onLogin: handleLogin
        });
      case 'signup':
        return React.createElement(SignUp, {
          onSwitchToLogin: () => setCurrentView('login')
        });
      case 'forgot-password':
        return React.createElement(ForgotPassword, {
          onSwitchToLogin: () => setCurrentView('login')
        });
      default:
        return React.createElement(Login, {
          onSwitchToSignup: () => setCurrentView('signup'),
          onSwitchToForgotPassword: () => setCurrentView('forgot-password'),
          onLogin: handleLogin
        });
    }
  };

  return React.createElement('div', { className: 'split-background' },
    React.createElement('div', { className: 'auth-container' },
      renderAuthView()
    )
  );
}

export default App;