import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import CadastroClientes from './components/CadastroClientes';
import GerenciarVeiculos from './components/GerenciarVeiculos';
import ProcessarLocacao from './components/ProcessarLocacao';
import Relatorios from './components/Relatorios';
import Financiamento from './components/Financiamento';
import ConfiguracaoConta from './components/ConfiguracaoConta';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'cadastro-clientes':
        return <CadastroClientes />;
      case 'gerenciar-veiculos':
        return <GerenciarVeiculos />;
      case 'processar-locacao':
        return <ProcessarLocacao />;
      case 'relatorios':
        return <Relatorios />;
      case 'financiamento':
        return <Financiamento />;
      case 'configuracao':
        return <ConfiguracaoConta />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h1>ÚNICA ERP</h1>
          <button 
            className="toggle-btn" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? '×' : '☰'}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <button 
                className={currentPage === 'dashboard' ? 'active' : ''}
                onClick={() => setCurrentPage('dashboard')}
              >
                📊 Dashboard
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'cadastro-clientes' ? 'active' : ''}
                onClick={() => setCurrentPage('cadastro-clientes')}
              >
                👥 Cadastro de Clientes
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'gerenciar-veiculos' ? 'active' : ''}
                onClick={() => setCurrentPage('gerenciar-veiculos')}
              >
                🚗 Gerenciar Veículos
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'processar-locacao' ? 'active' : ''}
                onClick={() => setCurrentPage('processar-locacao')}
              >
                📋 Processar Locação
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'relatorios' ? 'active' : ''}
                onClick={() => setCurrentPage('relatorios')}
              >
                📈 Relatórios
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'financiamento' ? 'active' : ''}
                onClick={() => setCurrentPage('financiamento')}
              >
                💰 Financiamento
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'configuracao' ? 'active' : ''}
                onClick={() => setCurrentPage('configuracao')}
              >
                ⚙️ Configurações
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <p>ÚNICA - ERP de Gestão de Aluguel de Carros</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="app-header">
          <div className="header-left">
            <button 
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
            <h2>{getPageTitle(currentPage)}</h2>
          </div>
          <div className="header-right">
            <span className="user-info">Usuário: Administrador</span>
          </div>
        </header>
        
        <div className="page-content">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

function getPageTitle(page) {
  const titles = {
    'dashboard': 'Dashboard',
    'cadastro-clientes': 'Cadastro de Clientes',
    'gerenciar-veiculos': 'Gerenciar Veículos',
    'processar-locacao': 'Processar Locação',
    'relatorios': 'Relatórios',
    'financiamento': 'Financiamento',
    'configuracao': 'Configurações'
  };
  return titles[page] || 'ÚNICA ERP';
}

export default App;
