import React, { useState } from 'react';
import { Search, Plus, Eye, Calendar, Trash2, ToggleLeft, ToggleRight, UserCheck } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      nom: 'sayari',
      email: 'sayari.sirine@esprit.tn',
      role: 'super_admin',
      telephone: '95116609',
      pays: 'Ariana',
      poste: '-',
      nomSociete: '-',
      codeTva: '-',
      statut: 'Actif',
      creeLE: '30/06/2025',
      isActive: true
    },
    {
      id: 2,
      nom: 'abidi',
      email: 'sirhesayari25@gmail.com',
      role: 'manager',
      telephone: '95116607',
      pays: 'Ariana',
      poste: 'Fleet Manager',
      nomSociete: '-',
      codeTva: '-',
      statut: 'Actif',
      creeLE: '30/06/2025',
      isActive: true
    },
    {
      id: 3,
      nom: 'khriji',
      email: 'wirida.khriji@enstab.ucar.tn',
      role: 'driver',
      telephone: '96852147',
      pays: 'Nabeul',
      poste: '-',
      nomSociete: '-',
      codeTva: '-',
      statut: 'Actif',
      creeLE: '30/06/2025',
      isActive: true
    },
    {
      id: 4,
      nom: '',
      email: 'ranimm@esprit.tn',
      role: 'manager',
      telephone: '-',
      pays: '-',
      poste: 'Fleet Manager',
      nomSociete: '-',
      codeTva: '-',
      statut: 'Actif',
      creeLE: '02/07/2025',
      isActive: true
    },
    {
      id: 5,
      nom: '',
      email: 'farahtelly@gmail.com',
      role: 'driver',
      telephone: '-',
      pays: '-',
      poste: '-',
      nomSociete: '-',
      codeTva: '-',
      statut: 'Actif',
      creeLE: '02/07/2025',
      isActive: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    email: '',
    role: 'driver'
  });

  const filteredUsers = users.filter(user =>
    user.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, isActive: !user.isActive, statut: !user.isActive ? 'Actif' : 'Inactif' } : user
    ));
  };

  const deleteUser = (userId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const addUser = () => {
    if (newUser.email) {
      const user = {
        id: Date.now(),
        nom: '',
        email: newUser.email,
        role: newUser.role,
        telephone: '-',
        pays: '-',
        poste: newUser.role === 'manager' ? 'Fleet Manager' : '-',
        nomSociete: '-',
        codeTva: '-',
        statut: 'Actif',
        creeLE: new Date().toLocaleDateString('fr-FR'),
        isActive: true
      };
      setUsers([...users, user]);
      setNewUser({ email: '', role: 'driver' });
      setShowAddModal(false);
    }
  };

  const getRoleBadge = (role) => {
    const roleConfig = {
      super_admin: { class: 'badge-super-admin', text: 'Super Admin' },
      manager: { class: 'badge-manager', text: 'Manager' },
      driver: { class: 'badge-driver', text: 'Driver' }
    };
    return roleConfig[role] || { class: 'badge-driver', text: 'Driver' };
  };

  return React.createElement('div', { className: 'user-management' },
    // Header avec titre et actions
    React.createElement('div', { className: 'page-header-blue' },
      React.createElement('h1', { className: 'page-title-white' }, 'Table des utilisateurs')
    ),

    // Barre d'actions
    React.createElement('div', { className: 'actions-bar' },
      React.createElement('div', { className: 'search-container-modern' },
        React.createElement(Search, { size: 20, className: 'search-icon-left' }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Rechercher...',
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          className: 'search-input-modern'
        })
      ),
      React.createElement('button', {
        className: 'btn-add-modern',
        onClick: () => setShowAddModal(true)
      },
        React.createElement(Plus, { size: 18 }),
        React.createElement('span', null, 'Créer un utilisateur')
      )
    ),

    // Tableau des utilisateurs
    React.createElement('div', { className: 'table-wrapper' },
      React.createElement('div', { className: 'table-scroll' },
        React.createElement('table', { className: 'modern-table' },
          React.createElement('thead', null,
            React.createElement('tr', null,
              React.createElement('th', null, 'NOM'),
              React.createElement('th', null, 'EMAIL'),
              React.createElement('th', null, 'RÔLE'),
              React.createElement('th', null, 'TÉLÉPHONE'),
              React.createElement('th', null, 'PAYS'),
              React.createElement('th', null, 'POSTE'),
              React.createElement('th', null, 'NOM DE LA SOCIÉTÉ'),
              React.createElement('th', null, 'CODE TVA'),
              React.createElement('th', null, 'STATUT'),
              React.createElement('th', null, 'CRÉÉ LE'),
              React.createElement('th', null, 'ACTIONS')
            )
          ),
          React.createElement('tbody', null,
            filteredUsers.map(user =>
              React.createElement('tr', { key: user.id, className: 'table-row' },
                React.createElement('td', { className: 'cell-name' }, user.nom || '-'),
                React.createElement('td', { className: 'cell-email' }, user.email),
                React.createElement('td', null,
                  React.createElement('span', {
                    className: `role-pill ${getRoleBadge(user.role).class}`
                  }, getRoleBadge(user.role).text)
                ),
                React.createElement('td', null, user.telephone),
                React.createElement('td', null, user.pays),
                React.createElement('td', null, user.poste),
                React.createElement('td', null, user.nomSociete),
                React.createElement('td', null, user.codeTva),
                React.createElement('td', null,
                  React.createElement('span', {
                    className: `status-pill ${user.isActive ? 'status-active' : 'status-inactive'}`
                  }, user.statut)
                ),
                React.createElement('td', null, user.creeLE),
                React.createElement('td', null,
                  React.createElement('div', { className: 'actions-cell' },
                    user.role !== 'super_admin' && React.createElement('button', {
                      className: `action-btn ${user.isActive ? 'btn-active' : 'btn-inactive'}`,                      onClick: () => toggleUserStatus(user.id),
                      title: user.isActive ? 'Désactiver' : 'Activer'
                    },
                      user.isActive ? React.createElement(ToggleRight, { size: 16 }) : React.createElement(ToggleLeft, { size: 16 })
                    ),
                    user.role !== 'super_admin' && React.createElement('button', {
                      className: 'action-btn btn-delete',
                      onClick: () => deleteUser(user.id),
                      title: 'Supprimer'
                    },
                      React.createElement(Trash2, { size: 16 })
                    ),
                    user.role !== 'super_admin' && React.createElement('button', {
                      className: 'action-btn btn-calendar',
                      title: 'Voir le calendrier'
                    },
                      React.createElement(Calendar, { size: 16 })
                    ),
                    user.role === 'manager' && React.createElement('div', {
                      className: 'manager-badge',
                      title: 'Manager'
                    },
                      React.createElement(UserCheck, { size: 16 })
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),

    showAddModal && React.createElement('div', { className: 'modal-backdrop' },
      React.createElement('div', { className: 'modal-card' },
        React.createElement('div', { className: 'modal-header-modern' },
          React.createElement('h3', null, 'Ajouter un utilisateur'),
          React.createElement('button', {
            className: 'modal-close-btn',
            onClick: () => setShowAddModal(false)
          }, '×')
        ),
        React.createElement('div', { className: 'modal-body-modern' },
          React.createElement('div', { className: 'input-group' },
            React.createElement('label', { className: 'input-label' }, 'Email'),
            React.createElement('input', {
              type: 'email',
              value: newUser.email,
              onChange: (e) => setNewUser({ ...newUser, email: e.target.value }),
              className: 'input-field',
              placeholder: 'utilisateur@exemple.com'
            })
          ),
          React.createElement('div', { className: 'input-group' },
            React.createElement('label', { className: 'input-label' }, 'Rôle'),
            React.createElement('select', {
              value: newUser.role,
              onChange: (e) => setNewUser({ ...newUser, role: e.target.value }),
              className: 'select-field'
            },
              React.createElement('option', { value: 'driver' }, 'Driver'),
              React.createElement('option', { value: 'manager' }, 'Manager')
            )
          )
        ),
        React.createElement('div', { className: 'modal-footer-modern' },
          React.createElement('button', {
            className: 'btn-secondary',
            onClick: () => setShowAddModal(false)
          }, 'Annuler'),
          React.createElement('button', {
            className: 'btn-primary',
            onClick: addUser
          }, 'Ajouter')
        )
      )
    )
  );
};

export default UserManagement;
