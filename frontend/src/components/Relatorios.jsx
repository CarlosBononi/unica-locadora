import React, { useState } from 'react';

const Relatorios = () => {
  const [periodo, setPeriodo] = useState('mes');
  const [relatorios, setRelatorios] = useState([]);

  const gerarRelatorio = () => {
    const novoRelatorio = {
      id: Date.now(),
      periodo,
      data: new Date().toLocaleDateString(),
      receita: 'R$ 15.000,00',
      alugueis: 12,
      multas: 'R$ 500,00'
    };
    setRelatorios([...relatorios, novoRelatorio]);
  };

  return (
    <div className="relatorios">
      <h2>Relatórios</h2>
      <div className="form-group">
        <label>Período:</label>
        <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
          <option value="dia">Diário</option>
          <option value="semana">Semanal</option>
          <option value="mes">Mensal</option>
          <option value="ano">Anual</option>
        </select>
        <button onClick={gerarRelatorio}>Gerar Relatório</button>
      </div>

      <div className="relatorios-list">
        <h3>Relatórios Gerados</h3>
        {relatorios.length === 0 ? (
          <p>Nenhum relatório gerado</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Período</th>
                <th>Data</th>
                <th>Receita</th>
                <th>Alugueis</th>
                <th>Multas</th>
              </tr>
            </thead>
            <tbody>
              {relatorios.map(rel => (
                <tr key={rel.id}>
                  <td>{rel.periodo}</td>
                  <td>{rel.data}</td>
                  <td>{rel.receita}</td>
                  <td>{rel.alugueis}</td>
                  <td>{rel.multas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Relatorios;
