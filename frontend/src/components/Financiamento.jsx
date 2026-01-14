import React, { useState } from 'react';

const Financiamento = () => {
  const [financiamentos, setFinanciamentos] = useState([]);
  const [valor, setValor] = useState('');
  const [parcelas, setParcelas] = useState('48');

  const adicionarFinanciamento = () => {
    if (valor) {
      setFinanciamentos([...financiamentos, { id: Date.now(), valor, parcelas, status: 'ativo' }]);
      setValor('');
    }
  };

  return (
    <div className="financiamento">
      <h2>Financiamento</h2>
      <div className="form-group">
        <label>Valor (R$):</label>
        <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
        <label>Parcelas:</label>
        <select value={parcelas} onChange={(e) => setParcelas(e.target.value)}>
          <option value="12">12 parcelas</option>
          <option value="24">24 parcelas</option>
          <option value="36">36 parcelas</option>
          <option value="48">48 parcelas</option>
        </select>
        <button onClick={adicionarFinanciamento}>Adicionar Financiamento</button>
      </div>

      <div className="financiamentos-list">
        <h3>Financiamentos Ativos</h3>
        {financiamentos.length === 0 ? (
          <p>Nenhum financiamento</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Valor</th>
                <th>Parcelas</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {financiamentos.map(f => (
                <tr key={f.id}>
                  <td>R$ {f.valor}</td>
                  <td>{f.parcelas}x</td>
                  <td>{f.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Financiamento;
