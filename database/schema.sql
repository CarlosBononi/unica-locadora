-- ==============================================
-- ESQUEMA DO BANCO DE DADOS - ÚNICA
-- ERP de Gestão de Aluguel de Carros
-- ==============================================

-- TABELA: CARROS
CREATE TABLE carros (
  id SERIAL PRIMARY KEY,
  placa VARCHAR(10) UNIQUE NOT NULL,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  ano INT NOT NULL,
  km_atual INT DEFAULT 0,
  status VARCHAR(20) DEFAULT 'disponivel',
  -- disponivel, alugado, manutencao
  diaria_valor DECIMAL(10,2) DEFAULT 350.00,
  km_incluido_dia INT DEFAULT 120,
  km_extra_valor DECIMAL(5,2) DEFAULT 0.70,
  seguro_valor DECIMAL(10,2) DEFAULT 0.00,
  gps_valor DECIMAL(10,2) DEFAULT 0.00,
  financiamento_ativo BOOLEAN DEFAULT FALSE,
  parcelas_restantes INT DEFAULT 48,
  valor_parcela DECIMAL(10,2) DEFAULT 1239.00,
  investimento_total DECIMAL(10,2) DEFAULT 59472.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: CLIENTES
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(14) UNIQUE NOT NULL,
  email VARCHAR(100),
  telefone VARCHAR(20),
  rg VARCHAR(15),
  cnh VARCHAR(12),
  endereco VARCHAR(255),
  cidade VARCHAR(50),
  estado VARCHAR(2),
  antecedentes_criminais BOOLEAN DEFAULT FALSE,
  data_verificacao_antecedentes TIMESTAMP,
  status VARCHAR(20) DEFAULT 'ativo',
  -- ativo, inativo, bloqueado
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: CONTRATOS
CREATE TABLE contratos (
  id SERIAL PRIMARY KEY,
  cliente_id INT NOT NULL REFERENCES clientes(id),
  carro_id INT NOT NULL REFERENCES carros(id),
  data_inicio DATE NOT NULL,
  hora_inicio TIME NOT NULL,
  data_termino DATE NOT NULL,
  hora_termino TIME NOT NULL,
  km_inicial INT NOT NULL,
  km_final INT,
  combustivel_inicio VARCHAR(20),
  -- cheio, meia, quase_vazio, vazio
  combustivel_termino VARCHAR(20),
  limpeza_devolucao VARCHAR(20),
  -- limpo, sujo
  multa_limpeza DECIMAL(10,2) DEFAULT 0.00,
  km_extra INT DEFAULT 0,
  valor_km_extra DECIMAL(10,2) DEFAULT 0.00,
  seguro_valor DECIMAL(10,2) DEFAULT 0.00,
  gps_valor DECIMAL(10,2) DEFAULT 0.00,
  diaria_valor DECIMAL(10,2) NOT NULL,
  valor_total DECIMAL(10,2) NOT NULL,
  assinado BOOLEAN DEFAULT FALSE,
  d4sign_id VARCHAR(100),
  d4sign_status VARCHAR(50),
  -- pending, completed, rejected
  status VARCHAR(20) DEFAULT 'ativo',
  -- ativo, finalizado, cancelado
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: INSPECOES
CREATE TABLE inspecoes (
  id SERIAL PRIMARY KEY,
  contrato_id INT NOT NULL REFERENCES contratos(id),
  tipo VARCHAR(20) NOT NULL,
  -- entrada, saida
  km_odometro INT NOT NULL,
  combustivel VARCHAR(20),
  -- cheio, meia, quase_vazio, vazio
  limpeza VARCHAR(20),
  -- limpo, sujo
  fotos_url JSONB,
  -- [{posicao: 'frente', url: 'https://...'}, ...]
  danos JSONB,
  -- [{posicao: 'parachoque_dianteiro', tipo: 'amassado', severidade: 'leve', foto_url: 'https://...'}]
  observacoes TEXT,
  realizada_por VARCHAR(100),
  data_inspecao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: MULTAS_ADICIONAIS
CREATE TABLE multas_adicionais (
  id SERIAL PRIMARY KEY,
  contrato_id INT NOT NULL REFERENCES contratos(id),
  tipo VARCHAR(50) NOT NULL,
  -- limpeza, combustivel, danos, outro
  descricao VARCHAR(255),
  valor DECIMAL(10,2) NOT NULL,
  comprovante_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: FINANCIAMENTO
CREATE TABLE financiamento (
  id SERIAL PRIMARY KEY,
  carro_id INT NOT NULL REFERENCES carros(id),
  investimento_total DECIMAL(10,2) NOT NULL,
  valor_parcela DECIMAL(10,2) NOT NULL,
  total_parcelas INT NOT NULL,
  parcelas_pagas INT DEFAULT 0,
  status VARCHAR(20) DEFAULT 'ativo',
  -- ativo, quitado, atrasado
  data_inicio DATE NOT NULL,
  data_termino_estimada DATE,
  receita_total DECIMAL(12,2) DEFAULT 0.00,
  lucro_mensal_medio DECIMAL(10,2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: HISTORICO_PAGAMENTOS
CREATE TABLE historico_pagamentos (
  id SERIAL PRIMARY KEY,
  financiamento_id INT NOT NULL REFERENCES financiamento(id),
  numero_parcela INT NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  data_vencimento DATE NOT NULL,
  data_pagamento DATE,
  status VARCHAR(20) DEFAULT 'pendente',
  -- pendente, pago, atrasado
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ÍNDICES PARA MELHOR PERFORMANCE
CREATE INDEX idx_carros_status ON carros(status);
CREATE INDEX idx_carros_placa ON carros(placa);
CREATE INDEX idx_clientes_cpf ON clientes(cpf);
CREATE INDEX idx_contratos_cliente ON contratos(cliente_id);
CREATE INDEX idx_contratos_carro ON contratos(carro_id);
CREATE INDEX idx_contratos_status ON contratos(status);
CREATE INDEX idx_inspecoes_contrato ON inspecoes(contrato_id);
CREATE INDEX idx_financiamento_carro ON financiamento(carro_id);

-- COMENTARIOS NAS TABELAS
COMMENT ON TABLE carros IS 'ÚNICA - Frota de veículos para aluguel';
COMMENT ON TABLE clientes IS 'ÚNICA - Cadastro de clientes/locatarios';
COMMENT ON TABLE contratos IS 'ÚNICA - Contratos de aluguel';
COMMENT ON TABLE inspecoes IS 'ÚNICA - Inspeções de entrada/saída de veículos';
COMMENT ON TABLE multas_adicionais IS 'ÚNICA - Multas e adicionais cobrados';
COMMENT ON TABLE financiamento IS 'ÚNICA - Controle de financiamento dos veículos';
COMMENT ON TABLE historico_pagamentos IS 'ÚNICA - Histórico de pagamentos do financiamento';
