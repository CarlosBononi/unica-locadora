import React, { useState } from 'react';

const GerenciarVeiculos = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    placa: '',
    ano: '',
    diaria: '',
    status: 'disponivel'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.marca && formData.modelo && formData.placa) {
      setVeiculos([...veiculos, { ...formData, id: Date.now() }]);
      setFormData({ marca: '', modelo: '', placa: '', ano: '', diaria: '', status: 'disponivel' });
    }
  };

  return (
    <div className="gerenciar-veiculos">
      <h2>Gerenciamento de Veículos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Marca:</label>
          <input type="text" name="marca" value={formData.marca} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Modelo:</label>
          <input type="text" name="modelo" value={formData.modelo} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Placa:</label>
          <input type="text" name="placa" value={formData.placa} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Ano:</label>
          <input type="number" name="ano" value={formData.ano} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Diária (R$):</label>
          <input type="number" name="diaria" value={formData.diaria} onChange={handleInputChange} step="0.01" />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleInputChange}>
            <option value="disponivel">Disponível</option>
            <option value="alugado">Alugado</option>
            <option value="manutencao">Manutenção</option>
          </select>
        </div>
        <button type="submit">Cadastrar Veículo</button>
      </form>

      <div className="veiculos-list">
        <h3>Veículos Cadastrados</h3>
        {veiculos.length === 0 ? (
          <p>Nenhum veículo cadastrado</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Diária</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {veiculos.map(veiculo => (
                <tr key={veiculo.id}>
                  <td>{veiculo.marca}</td>
                  <td>{veiculo.modelo}</td>
                  <td>{veiculo.placa}</td>
                  <td>R$ {veiculo.diaria}</td>
                  <td>{veiculo.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GerenciarVeiculos;
