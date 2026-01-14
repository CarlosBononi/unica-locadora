# 📋 GUIA PASSO A PASSO - CONSTRUINDO ÚNICA

## Olá Carlos! Aqui está o guia completo para construir o sistema ÚNICA do ZERO.

Vamos dividir em **10 etapas práticas** que você pode fazer no seu computador.

---

## ⏱️ TEMPO ESTIMADO: 8-10 horas

---

## 🚀 ETAPA 1: Preparar o Ambiente Local (30 minutos)

### O que você vai fazer:
1. Clonar o repositório do GitHub
2. Instalar as dependências do Node.js
3. Configurar as variáveis de ambiente

### Passo a passo:

```bash
# 1. Abra o Prompt de Comando / Terminal

# 2. Vá para o local onde quer guardar o projeto (ex: Documentos)
cd Documentos

# 3. Clone o repositório
git clone https://github.com/CarlosBononi/unica-locadora.git
cd unica-locadora

# 4. Veja a estrutura que já temos
dir

# Você deve ver:
# - README.md
# - database/
#   - schema.sql
# - GUIA-PASSO-A-PASSO.md (este arquivo)
```

✅ **Etapa 1 concluída!**

---

## 🔧 ETAPA 2: Criar Backend - Parte 1 (Package.json)

### O que você vai fazer:
Criar a pasta `backend` e o arquivo `package.json` com as dependências Node.js

### Passo a passo:

```bash
# 1. Crie a pasta backend
mkdir backend
cd backend

# 2. Crie o arquivo package.json (pode usar o editor de texto)
# Copie este conteúdo em um arquivo chamado package.json:
```

**Conteúdo de backend/package.json:**
```json
{
  "name": "unica-backend",
  "version": "1.0.0",
  "description": "Backend do ERP ÚNICA de Gestão de Aluguel de Carros",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "pg": "^8.8.0",
    "jsonwebtoken": "^9.0.0",
    "axios": "^1.3.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  },
  "author": "Carlos Bononi",
  "license": "MIT"
}
```

```bash
# 3. Depois, instale as dependências
npm install

# Isso vai criar uma pasta node_modules/ com todas as dependências
# Vai levar alguns minutos...
```

✅ **Etapa 2 concluída!**

---

## 📝 PRÓXIMAS ETAPAS (Resumo rápido):

### ETAPA 3: Criar backend/server.js
- Servidor Express na porta 5000
- Middleware CORS
- Conexão com Supabase/PostgreSQL

### ETAPA 4: Criar backend/.env.example
- Variáveis de ambiente
- Chaves de API

### ETAPA 5: Criar rotas de Carros
- GET /api/carros (listar todos)
- POST /api/carros (criar novo)
- PUT /api/carros/:id (atualizar)
- DELETE /api/carros/:id (deletar)

### ETAPA 6: Criar rotas de Clientes
- Seguindo o mesmo padrão de Carros
- + Verificação de antecedentes criminais (API)

### ETAPA 7: Criar rotas de Contratos
- Cálculos automáticos
- Integração com D4Sign

### ETAPA 8: Criar Frontend React
- Dashboard
- Formulários
- Gráficos

### ETAPA 9: Testar Localmente
- Backend rodando em localhost:5000
- Frontend rodando em localhost:3000

### ETAPA 10: Deploy
- Fazer deploy no Vercel (Frontend)
- Deploy no Railway ou Heroku (Backend)

---

## ⚠️ IMPORTANTE

Este é um guia vivo. Cada etapa será expandida conforme você progride.

**Quando chegar na ETAPA 3, me avise!** Vou gerar todo o código do server.js pronto para copiar e colar.

---

## 🎯 SEU PRÓXIMO PASSO:

1. Abra o Prompt/Terminal
2. Execute os comandos da ETAPA 1
3. Me avise quando terminar
4. Passamos para ETAPA 2 (Package.json)

---

**Você está pronto? Vamos começar!** 🚀
