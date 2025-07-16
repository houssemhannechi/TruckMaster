import React, { useState } from 'react';
import { Truck, Eye, EyeOff } from 'lucide-react';

const Login = ({ onSwitchToSignup, onSwitchToForgotPassword, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Simulation de connexion réussie
    if (onLogin) {
      onLogin(formData);
    }
  };
  

  return React.createElement('div', { className: 'auth-full-bg' },
    React.createElement('div', { className: 'auth-card' },
      React.createElement('div', { className: 'auth-icon' },
        React.createElement(Truck, { size: 32 })
      ),
      React.createElement('h1', { className: 'auth-title' }, 'Se connecter'),
      React.createElement('p', { className: 'auth-subtitle' }, 'Connectez-vous à votre espace de gestion'),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Email'),
          React.createElement('input', {
            type: 'email',
            name: 'email',
            className: 'form-input',
            placeholder: 'votre.email@entreprise.com',
            value: formData.email,
            onChange: handleInputChange,
            required: true
          })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Mot de passe'),
          React.createElement('div', { style: { position: 'relative' } },
            React.createElement('input', {
              type: showPassword ? 'text' : 'password',
              name: 'password',
              className: 'form-input',
              placeholder: '••••••••',
              value: formData.password,
              onChange: handleInputChange,
              required: true,
              style: { paddingRight: '45px' }
            }),
            React.createElement('button', {
              type: 'button',
              onClick: () => setShowPassword(!showPassword),
              style: {
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#7f8c8d'
              }
            },
              React.createElement(showPassword ? EyeOff : Eye, { size: 20 })
            )
          )
        ),
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }
        },
          React.createElement('div', { className: 'checkbox-container' },
            React.createElement('input', {
              type: 'checkbox',
              name: 'rememberMe',
              id: 'rememberMe',
              checked: formData.rememberMe,
              onChange: handleInputChange
            }),
            React.createElement('label', {
              htmlFor: 'rememberMe',
              className: 'checkbox-label'
            }, 'Se souvenir de moi')
          ),
          React.createElement('a', {
            href: '#',
            className: 'forgot-password',
            onClick: (e) => {
              e.preventDefault();
              onSwitchToForgotPassword && onSwitchToForgotPassword();
            }
          }, 'Mot de passe oublié ?')
        ),
        React.createElement('button', {
          type: 'submit',
          className: 'auth-button'
        }, 'Se connecter'),
        React.createElement('p', { className: 'auth-link' },
          'Pas encore de compte ? ',
          React.createElement('a', {
            href: '#',
            onClick: (e) => {
              e.preventDefault();
              onSwitchToSignup && onSwitchToSignup();
            }
          }, "S'inscrire")
        )
      )
    )
  );
};

export default Login;

