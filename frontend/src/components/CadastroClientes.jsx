import React, { useState } from 'react';

const CadastroClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    endereco: ''
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
    if (formData.nome && formData.cpf) {
      setClientes([...clientes, { ...formData, id: Date.now() }]);
      setFormData({ nome: '', cpf: '', telefone: '', email: '', endereco: '' });
    }
  };

  return (
    <div className="cadastro-clientes">
      <h2>Cadastro de Clientes</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Cadastrar Cliente</button>
      </form>

      <div className="clientes-list">
        <h3>Clientes Cadastrados</h3>
        {clientes.length === 0 ? (
          <p>Nenhum cliente cadastrado</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CadastroClientes;
