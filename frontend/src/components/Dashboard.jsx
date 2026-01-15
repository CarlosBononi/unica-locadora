import { useState, useEffect } from 'react';
import { supabase, clients, vehicles } from '../services/supabaseClient';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [clientsCount, setClientsCount] = useState(0);
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [recentClients, setRecentClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const { data: clientsData } = await clients.list();
      const { data: vehiclesData } = await vehicles.list();

      setClientsCount(clientsData?.length || 0);
      setVehiclesCount(vehiclesData?.length || 0);
      setRecentClients(clientsData?.slice(0, 5) || []);
    } catch (error) {
      console.error('Erro ao carregar dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="dashboard-loading">Carregando...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Dashboard - ÚNICA ERP</h1>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total de Clientes</h3>
          <p className="stat-number">{clientsCount}</p>
        </div>

        <div className="stat-card">
          <h3>Total de Veículos</h3>
          <p className="stat-number">{vehiclesCount}</p>
        </div>

        <div className="stat-card">
          <h3>Aluguéis Ativos</h3>
          <p className="stat-number">--</p>
        </div>

        <div className="stat-card">
          <h3>Receita Mensal</h3>
          <p className="stat-number">--</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Clientes Recentes</h2>

        {recentClients.length > 0 ? (
          <table className="clients-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Data de Cadastro</th>
              </tr>
            </thead>
            <tbody>
              {recentClients.map((client) => (
                <tr key={client.id}>
                  <td>{client.nome}</td>
                  <td>{client.email}</td>
                  <td>{client.telefone}</td>
                  <td>{new Date(client.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nenhum cliente cadastrado</p>
        )}
      </div>
    </div>
  );
}
