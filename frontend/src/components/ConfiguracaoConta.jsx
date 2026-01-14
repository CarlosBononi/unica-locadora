import React, { useState } from 'react';

const ConfiguracaoConta = () => {
  const [config, setConfig] = useState({ nome: 'ÚNICA Locadora', email: 'contato@unica.com', telefone: '(11) 9999-9999' });
  const [editando, setEditando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  const salvar = () => {
    setEditando(false);
    alert('Configurações salvas com sucesso!');
  };

  return (
    <div className="configuracao">
      <h2>Configuração de Conta</h2>
      <div className="config-info">
        {editando ? (
          <form>
            <div className="form-group">
              <label>Nome:</label>
              <input type="text" name="nome" value={config.nome} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={config.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Telefone:</label>
              <input type="tel" name="telefone" value={config.telefone} onChange={handleChange} />
            </div>
            <button type="button" onClick={salvar}>Salvar</button>
            <button type="button" onClick={() => setEditando(false)}>Cancelar</button>
          </form>
        ) : (
          <div>
            <p><strong>Nome:</strong> {config.nome}</p>
            <p><strong>Email:</strong> {config.email}</p>
            <p><strong>Telefone:</strong> {config.telefone}</p>
            <button onClick={() => setEditando(true)}>Editar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfiguracaoConta;
