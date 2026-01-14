import React, { useState } from 'react';

const ProcessarLocacao = () => {
  const [locacoes, setLocacoes] = useState([]);
  const [formData, setFormData] = useState({
    cliente: '',
    veiculo: '',
    dataInicio: '',
    dataFim: '',
    valor: ''
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
    if (formData.cliente && formData.veiculo && formData.dataInicio && formData.dataFim) {
      setLocacoes([...locacoes, { ...formData, id: Date.now(), status: 'ativa' }]);
      setFormData({ cliente: '', veiculo: '', dataInicio: '', dataFim: '', valor: '' });
    }
  };

  return (
    <div className="processar-locacao">
      <h2>Processar Locação</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cliente:</label>
          <input type="text" name="cliente" value={formData.cliente} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Veículo:</label>
          <input type="text" name="veiculo" value={formData.veiculo} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Data de Início:</label>
          <input type="date" name="dataInicio" value={formData.dataInicio} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Data de Fim:</label>
          <input type="date" name="dataFim" value={formData.dataFim} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Valor Total (R$):</label>
          <input type="number" name="valor" value={formData.valor} onChange={handleInputChange} step="0.01" />
        </div>
        <button type="submit">Criar Locação</button>
      </form>

      <div className="locacoes-list">
        <h3>Locações Ativas</h3>
        {locacoes.length === 0 ? (
          <p>Nenhuma locação cadastrada</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Veículo</th>
                <th>Início</th>
                <th>Fim</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {locacoes.map(locacao => (
                <tr key={locacao.id}>
                  <td>{locacao.cliente}</td>
                  <td>{locacao.veiculo}</td>
                  <td>{locacao.dataInicio}</td>
                  <td>{locacao.dataFim}</td>
                  <td>R$ {locacao.valor}</td>
                  <td>{locacao.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProcessarLocacao;
