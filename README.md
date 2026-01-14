# ÚNICA - ERP de Gestão de Aluguel de Carros

🚗 Sistema profissional e robusto para gestão completa de aluguel de veículos com contratos digitais, assinatura eletrônica, inspeção de carros e CRM.

## 🎯 Recursos Principais

✅ **Gestão de Frota**
- Cadastro de veículos com múltiplas opções
- Controle de km, status e manutenção
- Histórico de aluguéis por carro

✅ **CRM de Clientes**
- Cadastro completo com CPF, CNH e documentos
- Verificação de antecedentes criminais (API)
- Histórico de alugu éis

✅ **Contratos Digitais**
- Geração automática de contratos
- Assinatura eletrônica via D4Sign
- Termos de responsabilidade e cláusulas de proteção

✅ **Inspeção de Veículos**
- Checklist de inspeção entrada/saída
- Sistema de fotos (danos, limpeza, combustível)
- Relatório automático de danos

✅ **Cálculo de Tarifas**
- Diária: R$ 350
- KM incluído: 120 km/dia
- KM extra: R$ 0,70 por km
- Seguro completo
- GPS rastreador em tempo real
- Multas automáticas (limpeza, danos, etc)

✅ **Financiamento Integrado**
- Plano: 48x R$ 1.239
- Payback em ~10 meses
- Dashboard de ROI

## 📊 Arquitetura

```
├── backend/
│   ├── server.js (Node.js + Express)
│   ├── .env (configurações)
│   ├── config/
│   │   ├── database.js (Supabase/PostgreSQL)
│   │   └── apis.js (D4Sign, Info Simples, etc)
│   └── routes/
│       ├── carros.js
│       ├── clientes.js
│       ├── contratos.js
│       └── inspecoes.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx (Dashboard principal)
│   │   ├── components/
│   │   │   ├── CadastroCarros.jsx
│   │   │   ├── CadastroClientes.jsx
│   │   │   ├── GeradorContratos.jsx
│   │   │   └── InspecaoVeiculos.jsx
│   │   └── App.css
│   └── package.json
│
└── database/
    └── schema.sql (Tabelas: carros, clientes, contratos, inspecoes)
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js v16+
- PostgreSQL ou Supabase
- Git

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/CarlosBononi/unica-locadora.git
cd unica-locadora

# 2. Instale o backend
cd backend
npm install

# 3. Instale o frontend
cd ../frontend
npm install
npm start
```

### Variáveis de Ambiente

Crie `.env` no backend:

```
PORT=5000
DATABASE_URL=postgresql://...
D4SIGN_TOKEN=seu_token
INFO_SIMPLES_KEY=sua_chave
```

## 💰 Modelo Financeiro

**Investimento**: R$ 59.472 (48x R$ 1.239)

**Receita mensal por carro**: ~R$ 5.721
- 20 dias/mês × R$ 350 = R$ 7.000 (100% ocupação)
- Estimado 80% de ocupação = R$ 5.721/mês

**Payback**: ~10 meses

**Lucro puro após quitação**: R$ 4.482/mês por carro

## 🔗 Integrações

- **D4Sign**: Assinatura digital de contratos
- **Info Simples**: Verificação de antecedentes criminais
- **Supabase**: Banco de dados PostgreSQL
- **Stripe/PagSeguro**: Pagamentos (futuro)

## 📄 Licença

MIT - Copyright 2026 Carlos Bononi

---

**Desenvolvido com ❤️ para revolucionar o aluguel de carros no Brasil**
