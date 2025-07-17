import React, { useState } from 'react';
import { Truck, Eye, EyeOff, AlertCircle } from 'lucide-react';

const Login = ({ onLogin, onNavigateTo }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'un délai de connexion
    setTimeout(() => {
      onLogin(formData);
      setIsLoading(false);
    }, 1000);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    onNavigateTo('forgot-password');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    onNavigateTo('signup');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" 
         style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                {/* Logo */}
                <div className="text-center mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                       style={{ width: '60px', height: '60px' }}>
                    <Truck className="text-white" size={32} />
                  </div>
                  <h2 className="fw-bold text-dark">TruckMaster</h2>
                  <p className="text-muted">Connectez-vous à votre compte</p>
                </div>

                {/* Info pour les tests */}
                <div className="alert alert-info" role="alert">
                  <AlertCircle size={16} className="me-2" />
                  <small>
                    <strong>Test :</strong> Utilisez un email contenant "new" ou "nouveau" 
                    pour simuler un nouvel utilisateur
                  </small>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-medium" htmlFor="email">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control form-control-lg"
                      placeholder="votre.email@example.com"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-medium" htmlFor="password">
                      Mot de passe
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                        placeholder="********"
                        required
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="mb-4 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="form-check-input"
                        disabled={isLoading}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Se souvenir de moi
                      </label>
                    </div>
                    <a href="#" onClick={handleForgotPassword} 
                       className="text-decoration-none text-primary">
                      Mot de passe oublié?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 mb-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Connexion...
                      </>
                    ) : (
                      'Se connecter'
                    )}
                  </button>
                </form>

                <div className="text-center">
                  <span className="text-muted">Pas encore de compte? </span>
                  <a href="#" onClick={handleSignUp} 
                     className="text-decoration-none fw-medium text-primary">
                    S'inscrire
                  </a>
                </div>

                {/* Exemples d'emails pour les tests */}
                <div className="mt-4 p-3 bg-light rounded">
                  <small className="text-muted">
                    <strong>Exemples pour les tests :</strong><br/>
                    • <code>admin@truckmaster.com</code> - Utilisateur normal<br/>
                    • <code>new.user@truckmaster.com</code> - Nouvel utilisateur<br/>
                    • <code>nouveau@truckmaster.com</code> - Nouvel utilisateur
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
