import React, { useState } from 'react';
import { Truck, ArrowLeft } from 'lucide-react';

const ForgotPassword = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
    // Ici on ajouterait la logique d'envoi d'email
  };

  if (isSubmitted) {
    return React.createElement('div', { className: 'auth-full-bg' },
      React.createElement('div', { className: 'auth-card' },
        React.createElement('div', { className: 'auth-icon' },
          React.createElement(Truck, { size: 32 })
        ),
        React.createElement('h1', { className: 'auth-title' }, 'Email envoyé'),
        React.createElement('p', { className: 'auth-subtitle' },
          `Un email de réinitialisation a été envoyé à ${email}. Vérifiez votre boîte de réception et suivez les instructions.`
        ),
        React.createElement('button', {
          type: 'button',
          className: 'auth-button',
          onClick: () => onSwitchToLogin && onSwitchToLogin()
        }, 'Retour à la connexion'),
        React.createElement('p', { className: 'auth-link' },
          "Vous n'avez pas reçu l'email ? ",
          React.createElement('a', {
            href: '#',
            onClick: (e) => {
              e.preventDefault();
              setIsSubmitted(false);
            }
          }, 'Renvoyer')
        )
      )
    );
  }

  return React.createElement('div', { className: 'auth-full-bg' },
    React.createElement('div', { className: 'auth-card', style: { position: 'relative', maxWidth: '400px' } },
      React.createElement('button', {
        type: 'button',
        onClick: () => onSwitchToLogin && onSwitchToLogin(),
        style: {
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-gray)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          fontFamily: 'Open Sans, sans-serif'
        }
      },
        React.createElement(ArrowLeft, { size: 16 }),
        'Retour'
      ),
      React.createElement('div', { className: 'auth-icon' },
        React.createElement(Truck, { size: 32 })
      ),
      React.createElement('h1', { className: 'auth-title' }, 'Mot de passe oublié'),
      React.createElement('p', { className: 'auth-subtitle' },
        'Saisissez votre adresse email pour recevoir un lien de réinitialisation'
      ),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Email'),
          React.createElement('input', {
            type: 'email',
            name: 'email',
            className: 'form-input',
            placeholder: 'votre.email@entreprise.com',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true
          })
        ),
        React.createElement('button', {
          type: 'submit',
          className: 'auth-button'
        }, 'Envoyer le lien de réinitialisation'),
        React.createElement('p', { className: 'auth-link' },
          'Vous vous souvenez de votre mot de passe ? ',
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

export default ForgotPassword;

