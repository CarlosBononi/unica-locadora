// ========================================
// SERVIDOR UNICA - ERP DE ALUGUEL DE CARROS
// ========================================

// 1. IMPORTAR AS BIBLIOTECAS NECESSÁRIAS
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

// 2. CARREGAR VARIÁVEIS DE AMBIENTE DO ARQUIVO .env
dotenv.config();

// 3. CRIAR A APLICAÇÃO EXPRESS
const app = express();

// 4. MIDDLEWARE - Permitir que o servidor receba JSON
app.use(express.json());

// 5. MIDDLEWARE - CORS (permite que o frontend se comunique com o backend)
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// ========================================
// CONFIGURAÇãO DO BANCO DE DADOS SUPABASE
// ========================================

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Testar conexão com o banco de dados
pool.on('connect', () => {
  console.log('✅ Conectado ao Supabase PostgreSQL com sucesso!');
});

pool.on('error', (err) => {
  console.error('❌ Erro na conexão com o banco de dados:', err);
});

// ========================================
// ROTA DE TESTE - Verificar se o servidor está funcionando
// ========================================

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    mensagem: 'Servidor UNICA está funcionando com sucesso!',
    timestamp: new Date().toISOString()
  });
});

// ========================================
// ROTAS DE CLIENTES (CRUD)
// ========================================

// GET - Listar todos os clientes
app.get('/api/clientes', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM clientes');
    res.json(resultado.rows);
  } catch (erro) {
    console.error('Erro ao buscar clientes:', erro);
    res.status(500).json({ erro: 'Erro ao buscar clientes' });
  }
});

// GET - Buscar um cliente por ID
app.get('/api/clientes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
    
    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }
    
    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error('Erro ao buscar cliente:', erro);
    res.status(500).json({ erro: 'Erro ao buscar cliente' });
  }
});

// POST - Criar novo cliente
app.post('/api/clientes', async (req, res) => {
  try {
    const { nome, cpf, email, telefone, endereco } = req.body;
    
    // Validar campos obrigatórios
    if (!nome || !cpf || !email) {
      return res.status(400).json({ erro: 'Nome, CPF e email são obrigatórios' });
    }
    
    const resultado = await pool.query(
      'INSERT INTO clientes (nome, cpf, email, telefone, endereco) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nome, cpf, email, telefone, endereco]
    );
    
    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    console.error('Erro ao criar cliente:', erro);
    res.status(500).json({ erro: 'Erro ao criar cliente' });
  }
});

// ========================================
// ROTAS DE CARROS (CRUD)
// ========================================

// GET - Listar todos os carros
app.get('/api/carros', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM carros');
    res.json(resultado.rows);
  } catch (erro) {
    console.error('Erro ao buscar carros:', erro);
    res.status(500).json({ erro: 'Erro ao buscar carros' });
  }
});

// POST - Criar novo carro
app.post('/api/carros', async (req, res) => {
  try {
    const { placa, modelo, marca, ano, diaria, status } = req.body;
    
    if (!placa || !modelo || !marca || !diaria) {
      return res.status(400).json({ erro: 'Placa, modelo, marca e diária são obrigatórios' });
    }
    
    const resultado = await pool.query(
      'INSERT INTO carros (placa, modelo, marca, ano, diaria, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [placa, modelo, marca, ano, diaria, status || 'disponivel']
    );
    
    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    console.error('Erro ao criar carro:', erro);
    res.status(500).json({ erro: 'Erro ao criar carro' });
  }
});

// ========================================
// ROTAS DE ALUGUÉIS (CRUD)
// ========================================

// GET - Listar todos os aluguéis
app.get('/api/aluguel', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM aluguel');
    res.json(resultado.rows);
  } catch (erro) {
    console.error('Erro ao buscar aluguéis:', erro);
    res.status(500).json({ erro: 'Erro ao buscar aluguéis' });
  }
});

// POST - Criar novo alug uel
app.post('/api/aluguel', async (req, res) => {
  try {
    const { cliente_id, carro_id, data_inicio, data_fim, valor_total, status } = req.body;
    
    if (!cliente_id || !carro_id || !data_inicio || !data_fim) {
      return res.status(400).json({ erro: 'Cliente, carro e datas são obrigatórios' });
    }
    
    const resultado = await pool.query(
      'INSERT INTO aluguel (cliente_id, carro_id, data_inicio, data_fim, valor_total, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [cliente_id, carro_id, data_inicio, data_fim, valor_total, status || 'ativo']
    );
    
    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    console.error('Erro ao criar alug uel:', erro);
    res.status(500).json({ erro: 'Erro ao criar alug uel' });
  }
});

// ========================================
// INICIAR O SERVIDOR
// ========================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n`);
  console.log(`⚡️  SERVIDOR UNICA INICIADO COM SUCESSO!`);
  console.log(`♾️  Ouvindo na porta: ${PORT}`);
  console.log(`🚀 Acesse: http://localhost:${PORT}`);
  console.log(`👍 Teste a saúde do servidor: http://localhost:${PORT}/api/health`);
  console.log(`\n`);
});

// Tratamento de erros não capturados
process.on('unhandledRejection', (err) => {
  console.error('Erro não capturado:', err);
  process.exit(1);
});
