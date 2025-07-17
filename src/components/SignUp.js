import React, { useState } from 'react';
import { Truck, Eye, EyeOff } from 'lucide-react';

const SignUp = ({ onSwitchToLogin }) => {
  const [step, setStep] = useState(1); // 1 for personal info, 2 for company info
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyEmail: '', // Added company email based on image
    tvaCode: '', // Added TVA Code based on image
    companyAddress: '',
    companyPhoneNumber: '', // Changed to companyPhoneNumber
    legalRepresentative: '' // Added Legal Representative based on image
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

  const handleNext = (e) => {
    e.preventDefault();
    // Basic validation for step 1
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
        alert('Veuillez remplir tous les champs personnels.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will only be called on step 2
    console.log('Signup attempt:', formData);
    // Ici on ajouterait la logique d'inscription finale
  };

  return React.createElement('div', { className: 'auth-full-bg' },
    React.createElement('div', { className: 'auth-card', style: { maxWidth: '500px' } },
      React.createElement('div', { className: 'auth-icon' },
        React.createElement(Truck, { size: 32 })
      ),
      React.createElement('h1', { className: 'auth-title' }, "Créer un compte Super Admin"),
      React.createElement('p', { className: 'auth-subtitle' }, step === 1 ? 'Entrez vos informations personnelles' : 'Entrez les informations de votre entreprise'),
      React.createElement('form', { onSubmit: step === 1 ? handleNext : handleSubmit },
        step === 1 ? (
          // Personal Info Step
          React.createElement(React.Fragment, null,
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
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Sélectionner votre ville'),
              React.createElement('input', {
                type: 'text',
                name: 'city',
                className: 'form-input',
                placeholder: 'Votre ville',
                value: formData.city,
                onChange: handleInputChange,
                required: true
              })
            ),
            React.createElement('div', { className: 'form-group checkbox-group' },
              React.createElement('input', { type: 'checkbox', id: 'terms', name: 'terms', required: true }),
              React.createElement('label', { htmlFor: 'terms' },
                'J\'accepte les ',
                React.createElement('a', { href: '#', style: { color: 'var(--primary-blue)', textDecoration: 'underline' } }, 'Termes et Conditions')
              )
            ),
            React.createElement('button', { type: 'submit', className: 'auth-button' }, 'SUIVANT')
          )
        ) : (
          // Company Info Step
          React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Nom de l\'entreprise'),
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
              React.createElement('label', { className: 'form-label' }, 'Email de l\'entreprise'),
              React.createElement('input', {
                type: 'email',
                name: 'companyEmail',
                className: 'form-input',
                placeholder: 'email@entreprise.com',
                value: formData.companyEmail,
                onChange: handleInputChange,
                required: true
              })
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Code TVA'),
              React.createElement('input', {
                type: 'text',
                name: 'tvaCode',
                className: 'form-input',
                placeholder: 'Code TVA',
                value: formData.tvaCode,
                onChange: handleInputChange,
                required: true
              })
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Adresse de l\'entreprise'),
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
              React.createElement('label', { className: 'form-label' }, 'Numéro de téléphone de l\'entreprise'),
              React.createElement('input', {
                type: 'tel',
                name: 'companyPhoneNumber',
                className: 'form-input',
                placeholder: '+33 1 23 45 67 89',
                value: formData.companyPhoneNumber,
                onChange: handleInputChange,
                required: true
              })
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Représentant légal'),
              React.createElement('input', {
                type: 'text',
                name: 'legalRepresentative',
                className: 'form-input',
                placeholder: 'Nom du représentant légal',
                value: formData.legalRepresentative,
                onChange: handleInputChange,
                required: true
              })
            ),
            React.createElement('button', { type: 'submit', className: 'auth-button' }, 'S\'INSCRIRE')
          )
        )
        ,
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