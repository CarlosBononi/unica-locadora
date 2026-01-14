import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard - UNICA ERP</h1>
      <div className="dashboard-content">
        <div className="card">
          <h2>Total de Clientes</h2>
          <p>0</p>
        </div>
        <div className="card">
          <h2>Veiculos em Frota</h2>
          <p>0</p>
        </div>
        <div className="card">
          <h2>Reservas Ativas</h2>
          <p>0</p>
        </div>
        <div className="card">
          <h2>Receita Total</h2>
          <p>R$ 0.00</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
