import React, { useState } from 'react';
import { Truck, Eye, EyeOff } from 'lucide-react';

const SignUp = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyAddress: '',
    phoneNumber: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    console.log('Signup attempt:', formData);
    // Ici on ajouterait la logique d'inscription
  };

  return React.createElement('div', { className: 'auth-full-bg' },
    React.createElement('div', { className: 'auth-card', style: { maxWidth: '500px' } },
      React.createElement('div', { className: 'auth-icon' },
        React.createElement(Truck, { size: 32 })
      ),
      React.createElement('h1', { className: 'auth-title' }, "S'inscrire"),
      React.createElement('p', { className: 'auth-subtitle' }, 'Créez votre compte pour accéder à la plateforme'),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('h3', {
          style: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '18px',
            fontWeight: '600',
            color: 'var(--secondary-blue)',
            marginBottom: '16px',
            textAlign: 'left'
          }
        }, 'Informations personnelles'),
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '20px'
          }
        },
          React.createElement('div', { className: 'form-group', style: { marginBottom: 0 } },
            React.createElement('label', { className: 'form-label' }, 'Prénom'),
            React.createElement('input', {
              type: 'text',
              name: 'firstName',
              className: 'form-input',
              placeholder: 'Votre prénom',
              value: formData.firstName,
              onChange: handleInputChange,
              required: true
            })
          ),
          React.createElement('div', { className: 'form-group', style: { marginBottom: 0 } },
            React.createElement('label', { className: 'form-label' }, 'Nom'),
            React.createElement('input', {
              type: 'text',
              name: 'lastName',
              className: 'form-input',
              placeholder: 'Votre nom',
              value: formData.lastName,
              onChange: handleInputChange,
              required: true
            })
          )
        ),
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
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Confirmer le mot de passe'),
          React.createElement('div', { style: { position: 'relative' } },
            React.createElement('input', {
              type: showConfirmPassword ? 'text' : 'password',
              name: 'confirmPassword',
              className: 'form-input',
              placeholder: '••••••••',
              value: formData.confirmPassword,
              onChange: handleInputChange,
              required: true,
              style: { paddingRight: '45px' }
            }),
            React.createElement('button', {
              type: 'button',
              onClick: () => setShowConfirmPassword(!showConfirmPassword),
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
              React.createElement(showConfirmPassword ? EyeOff : Eye, { size: 20 })
            )
          )
        ),
        React.createElement('h3', {
          style: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '18px',
            fontWeight: '600',
            color: 'var(--secondary-blue)',
            marginBottom: '16px',
            marginTop: '24px',
            textAlign: 'left'
          }
        }, "Informations de l'entreprise"),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, "Nom de l'entreprise"),
          React.createElement('input', {
            type: 'text',
            name: 'companyName',
            className: 'form-input',
            placeholder: 'Nom de votre entreprise',
            value: formData.companyName,
            onChange: handleInputChange,
            required: true
          })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, "Adresse de l'entreprise"),
          React.createElement('input', {
            type: 'text',
            name: 'companyAddress',
            className: 'form-input',
            placeholder: 'Adresse complète',
            value: formData.companyAddress,
            onChange: handleInputChange,
            required: true
          })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Numéro de téléphone'),
          React.createElement('input', {
            type: 'tel',
            name: 'phoneNumber',
            className: 'form-input',
            placeholder: '+33 1 23 45 67 89',
            value: formData.phoneNumber,
            onChange: handleInputChange,
            required: true
          })
        ),
        React.createElement('button', { type: 'submit', className: 'auth-button' }, "S'inscrire"),
        React.createElement('p', { className: 'auth-link' },
          'Déjà un compte ? ',
          React.createElement('a', {
            href: '#',
            onClick: (e) => {
              e.preventDefault();
              onSwitchToLogin && onSwitchToLogin();
            }
          }, 'Se connecter')
        )
      )
    )
  );
};

export default SignUp;

