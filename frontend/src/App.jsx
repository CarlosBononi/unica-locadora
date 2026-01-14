import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import CadastroClientes from './components/CadastroClientes';
import GerenciarFrota from './components/GerenciarFrota';
import Reservas from './components/Reservas';
import Contratos from './components/Contratos';
import InspecaoVeiculos from './components/InspecaoVeiculos';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'clientes':
        return <CadastroClientes />;
      case 'frota':
        return <GerenciarFrota />;
      case 'reservas':
        return <Reservas />;
      case 'contratos':
        return <Contratos />;
      case 'inspecao':
        return <InspecaoVeiculos />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">UNICA - ERP ALUGUEL DE CARROS</div>
        <ul className="nav-menu">
          <li><a onClick={() => setCurrentPage('dashboard')}>Dashboard</a></li>
          <li><a onClick={() => setCurrentPage('clientes')}>Clientes</a></li>
          <li><a onClick={() => setCurrentPage('frota')}>Frota</a></li>
          <li><a onClick={() => setCurrentPage('reservas')}>Reservas</a></li>
          <li><a onClick={() => setCurrentPage('contratos')}>Contratos</a></li>
          <li><a onClick={() => setCurrentPage('inspecao')}>Inspecao</a></li>
        </ul>
      </nav>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
