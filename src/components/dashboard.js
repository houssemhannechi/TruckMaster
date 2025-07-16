import React from 'react';
import { Truck, CheckCircle, XCircle, Wrench, TrendingUp, Clock } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Trucks',
      value: '5',
      subtitle: 'Current fleet size',
      icon: Truck,
      color: 'blue',
      bgColor: '#2c3e50'
    },
    {
      title: 'Truck In Service',
      value: '5',
      subtitle: 'Operational',
      icon: CheckCircle,
      color: 'green',
      bgColor: '#27ae60'
    },
    {
      title: 'Truck Out of Service',
      value: '0',
      subtitle: 'Unavailable',
      icon: XCircle,
      color: 'red',
      bgColor: '#e74c3c'
    },
    {
      title: 'Truck Under Maintenance',
      value: '0',
      subtitle: 'In repair',
      icon: Wrench,
      color: 'orange',
      bgColor: '#f39c12'
    }
  ];

  return React.createElement('div', { className: 'dashboard' },
    React.createElement('div', { className: 'dashboard-header' },
      React.createElement('h1', { className: 'dashboard-title' }, 'Dashboard'),
      React.createElement('p', { className: 'dashboard-subtitle' }, 
        'Vue d\'ensemble de votre flotte de transport'
      )
    ),

    // Cartes statistiques
    React.createElement('div', { className: 'stats-grid' },
      stats.map((stat, index) => 
        React.createElement('div', { key: index, className: 'stat-card' },
          React.createElement('div', { className: 'stat-icon-container' },
            React.createElement('div', { 
              className: 'stat-icon',
              style: { backgroundColor: stat.bgColor }
            },
              React.createElement(stat.icon, { size: 24, color: 'white' })
            )
          ),
          React.createElement('div', { className: 'stat-content' },
            React.createElement('h3', { className: 'stat-title' }, stat.title),
            React.createElement('div', { className: 'stat-value' }, stat.value),
            React.createElement('p', { className: 'stat-subtitle' }, stat.subtitle)
          )
        )
      )
    ),

    // Graphiques et tableaux
    React.createElement('div', { className: 'dashboard-charts' },
      React.createElement('div', { className: 'chart-card' },
        React.createElement('div', { className: 'chart-header' },
          React.createElement('h3', null, 'Statistiques Des Trajets Pour Le Manager'),
          React.createElement('p', null, 'Nombre de trajets par mois sur les 10 derniers mois')
        ),
        React.createElement('div', { className: 'chart-placeholder blue-chart' },
          React.createElement('div', { className: 'chart-content' },
            React.createElement(TrendingUp, { size: 48, color: '#3498db' }),
            React.createElement('p', null, 'Graphique des trajets mensuels')
          )
        ),
        React.createElement('div', { className: 'chart-footer' },
          React.createElement(Clock, { size: 16 }),
          React.createElement('span', null, 'Mis à jour: 10/07/2025')
        )
      ),

      React.createElement('div', { className: 'chart-card' },
        React.createElement('div', { className: 'chart-header' },
          React.createElement('h3', null, 'Drivers By Status'),
          React.createElement('p', null, 'Distribution of Status Driver')
        ),
        React.createElement('div', { className: 'chart-placeholder green-chart' },
          React.createElement('div', { className: 'chart-content' },
            React.createElement('div', { className: 'pie-chart' },
              React.createElement('div', { className: 'pie-slice' })
            ),
            React.createElement('p', null, 'AVAILABLE - 100.0%')
          )
        ),
        React.createElement('div', { className: 'chart-footer' },
          React.createElement('span', null, 'updated just now')
        )
      ),

      React.createElement('div', { className: 'chart-card' },
        React.createElement('div', { className: 'chart-header' },
          React.createElement('h3', null, 'Consommation Et Coût Total'),
          React.createElement('p', null, 'Consommation et coût mensuels des trajets (10 derniers mois)')
        ),
        React.createElement('div', { className: 'chart-placeholder orange-chart' },
          React.createElement('div', { className: 'chart-content' },
            React.createElement(TrendingUp, { size: 48, color: '#27ae60' }),
            React.createElement('p', null, 'Consommation totale (L) / Coût total (€)')
          )
        ),
        React.createElement('div', { className: 'chart-footer' },
          React.createElement(Clock, { size: 16 }),
          React.createElement('span', null, 'Mis à jour: 10/07/2025')
        )
      )
    )
  );
};

export default Dashboard;
