import React, { useState } from 'react';
import { 
  User, 
  Camera, 
  Eye, 
  EyeOff, 
  Save, 
  CheckCircle, 
  AlertCircle,
  Upload
} from 'lucide-react';

const UserProfileUpdate = ({ userInfo, isNewUser, onProfileConfigured }) => {
  const [profileData, setProfileData] = useState({
    firstName: userInfo?.name || '',
    lastName: '',
    email: userInfo?.email || '',
    phone: '',
    position: 'Super Admin',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    profileImage: null
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          profileImage: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!profileData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est obligatoire';
    }
    if (!profileData.lastName.trim()) {
      newErrors.lastName = 'Le nom est obligatoire';
    }

    if (isNewUser) {
      if (!profileData.currentPassword) {
        newErrors.currentPassword = 'Le mot de passe actuel est obligatoire';
      }
      if (!profileData.newPassword) {
        newErrors.newPassword = 'Le nouveau mot de passe est obligatoire';
      } else if (profileData.newPassword.length < 8) {
        newErrors.newPassword = 'Le mot de passe doit contenir au moins 8 caractères';
      }
      if (profileData.newPassword !== profileData.confirmPassword) {
        newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setSuccessMessage('Profil mis à jour avec succès !');
      setIsLoading(false);
      
      setTimeout(() => {
        onProfileConfigured();
      }, 2000);
    }, 1500);
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="text-primary fw-bold mb-1">User Profile</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#" className="text-decoration-none">Admin</a>
                  </li>
                  <li className="breadcrumb-item active">User Profile</li>
                </ol>
              </nav>
            </div>
            <button className="btn btn-outline-danger">
              LOG OUT
            </button>
          </div>

          {successMessage && (
            <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
              <CheckCircle size={20} className="me-2" />
              {successMessage}
            </div>
          )}

          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Account Settings</h4>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-medium">Prénom *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={profileData.firstName}
                          onChange={handleInputChange}
                          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                          placeholder="Entrez votre prénom"
                          disabled={isLoading}
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName}</div>
                        )}
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-medium">Nom *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={profileData.lastName}
                          onChange={handleInputChange}
                          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                          placeholder="Entrez votre nom"
                          disabled={isLoading}
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">{errors.lastName}</div>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-medium">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={profileData.email}
                          className="form-control"
                          disabled
                        />
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-medium">Téléphone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="+33 1 23 45 67 89"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-medium">Position</label>
                      <input
                        type="text"
                        name="position"
                        value={profileData.position}
                        onChange={handleInputChange}
                        className="form-control"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="border-top pt-4 mt-4">
                      <h5 className="text-primary mb-3">
                        Change Password
                        {isNewUser && <span className="text-danger"> *</span>}
                      </h5>
                      
                      {isNewUser && (
                        <div className="alert alert-warning d-flex align-items-center mb-3">
                          <AlertCircle size={16} className="me-2" />
                          <small>
                            Pour des raisons de sécurité, vous devez changer votre mot de passe lors de votre première connexion.
                          </small>
                        </div>
                      )}

                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label className="form-label fw-medium">
                            Mot de passe actuel {isNewUser && '*'}
                          </label>
                          <div className="input-group">
                            <input
                              type={showPasswords.current ? "text" : "password"}
                              name="currentPassword"
                              value={profileData.currentPassword}
                              onChange={handleInputChange}
                              className={`form-control ${errors.currentPassword ? 'is-invalid' : ''}`}
                              placeholder="••••••••"
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={() => togglePasswordVisibility('current')}
                              disabled={isLoading}
                            >
                              {showPasswords.current ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                          {errors.currentPassword && (
                            <div className="text-danger small mt-1">{errors.currentPassword}</div>
                          )}
                        </div>

                        <div className="col-md-4 mb-3">
                          <label className="form-label fw-medium">
                            Nouveau mot de passe {isNewUser && '*'}
                          </label>
                          <div className="input-group">
                            <input
                              type={showPasswords.new ? "text" : "password"}
                              name="newPassword"
                              value={profileData.newPassword}
                              onChange={handleInputChange}
                              className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                              placeholder="••••••••"
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={() => togglePasswordVisibility('new')}
                              disabled={isLoading}
                            >
                              {showPasswords.new ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                          {errors.newPassword && (
                            <div className="text-danger small mt-1">{errors.newPassword}</div>
                          )}
                        </div>

                        <div className="col-md-4 mb-3">
                          <label className="form-label fw-medium">
                            Confirmer le mot de passe {isNewUser && '*'}
                          </label>
                          <div className="input-group">
                            <input
                              type={showPasswords.confirm ? "text" : "password"}
                              name="confirmPassword"
                              value={profileData.confirmPassword}
                              onChange={handleInputChange}
                              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                              placeholder="••••••••"
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={() => togglePasswordVisibility('confirm')}
                              disabled={isLoading}
                            >
                              {showPasswords.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                          {errors.confirmPassword && (
                            <div className="text-danger small mt-1">{errors.confirmPassword}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="position-relative d-inline-block mb-3">
                        <div 
                          className="rounded-circle bg-light d-flex align-items-center justify-content-center border"
                          style={{ width: '150px', height: '150px' }}
                        >
                          {profileData.profileImage ? (
                            <img 
                              src={profileData.profileImage} 
                              alt="Profile" 
                              className="rounded-circle"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          ) : (
                            <User size={60} className="text-muted" />
                          )}
                        </div>
                        <label 
                          htmlFor="profileImageInput"
                          className="position-absolute bottom-0 end-0 btn btn-primary btn-sm rounded-circle"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <Camera size={16} />
                        </label>
                        <input
                          id="profileImageInput"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="d-none"
                          disabled={isLoading}
                        />
                      </div>
                      
                      <h5 className="fw-bold">{profileData.firstName || 'Nom'} {profileData.lastName || 'Prénom'}</h5>
                      <p className="text-muted">{profileData.position}</p>
                      
                      <div className="d-grid gap-2 mt-4">
                        <button 
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() => document.getElementById('profileImageInput').click()}
                          disabled={isLoading}
                        >
                          <Upload size={16} className="me-2" />
                          UPDATE PROFILE
                        </button>
                        
                        <button 
                          type="button"
                          className="btn btn-outline-secondary"
                          disabled={isLoading}
                        >
                          SECURITY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-12">
                    <div className="d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary px-4"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Sauvegarde...
                          </>
                        ) : (
                          <>
                            <Save size={16} className="me-2" />
                            CHANGE PASSWORD
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileUpdate;
