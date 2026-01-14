# GUIA COMPLETO - FRONTEND UNICA ERP

## 🎯 Introdução

Este guia fornece instruções DETALHADAS em português para instalar, configurar e rodar o **FRONTEND React** do ÚNICA ERP - Sistema de Gestão de Aluguel de Carros.

O frontend foi construído com **React 18** usando **Vite** como bundler, com **Axios** para comunicação com o backend.

---

## 📋 Pré-Requisitos

Antes de começar, verifique se você tem instalado:

### 1. Node.js e NPM
```bash
node --version   # Deve ser v16.0.0 ou superior
npm --version    # Deve ser v8.0.0 ou superior
```

Se não tiver instalado, baixe em: https://nodejs.org/

### 2. Git
```bash
git --version    # Deve estar instalado
```

### 3. Backend Rodando
O backend UNICA ERP deve estar rodando em `http://localhost:5000`

Verifique acessando: `http://localhost:5000/api/health`

---

## ⚙️ Instalação do Frontend (Passo a Passo)

### PASSO 1: Abra o Terminal/CMD

1. Pressione `Windows + R`
2. Digite `cmd` e pressione Enter
3. Uma janela preta (terminal) abrirá

### PASSO 2: Navegue até a Pasta do Projeto

```bash
cd C:\Users\Contingência\Documents\unica-locadora
```

**Importante**: Substitua `Contingência` pelo seu nome de usuário Windows se for diferente.

### PASSO 3: Navegue até a Pasta do Frontend

```bash
cd frontend
```

### PASSO 4: Instale as Dependências

```bash
npm install
```

**O que acontece?**
- NPM baixará todas as bibliotecas React, Vite e Axios
- Criará uma pasta `node_modules/` com ~400MB
- Pode levar 2-5 minutos dependendo da velocidade da internet

**Se houver erro**, tente:
```bash
rm -r node_modules
npm cache clean --force
npm install
```

### PASSO 5: Inicie o Servidor de Desenvolvimento

```bash
npm start
```

Ou, se `start` não funcionar:
```bash
npm run dev
```

**Sucesso!** Você verá mensagens como:
```
VITE v4.4.0 ready in 234 ms
➜  Local:   http://localhost:5173/
```

### PASSO 6: Abra no Navegador

Acesse no seu navegador (Chrome, Firefox, Edge):
```
http://localhost:5173
```

**Você verá o UNICA ERP funcionando! 🎉**

---

## 🧪 Testando a Conexão com o Backend

1. Abra o Console (F12 no navegador > Aba "Console")
2. A página tentará se conectar a `http://localhost:5000/api`
3. Se não houver erros em vermelho, tudo está funcionando!

---

## 🚀 Funcionalidades Implementadas

### Dashboard Principal
- Visão geral do sistema
- Estatísticas de alugu éis
- Acesso rápido às funções

### Gestão de Clientes
- ✅ Listar clientes cadastrados
- ✅ Adicionar novo cliente
- ✅ Editar informações do cliente
- ✅ Deletar cliente

### Gestão de Carros
- ✅ Listar carros disponíveis
- ✅ Adicionar novo carro
- ✅ Editar dados do carro
- ✅ Deletar carro

### Gestão de Alugu éis
- ✅ Criar novo aluguel (cliente + carro + datas)
- ✅ Listar aluguéis ativos
- ✅ Calcular valores automaticamente

---

## ⚠️ Troubleshooting (Resolução de Problemas)

### Problema: "Port 5173 is already in use"

**Solução:**
```bash
# Mude a porta
npm run dev -- --port 3000
```

Depois acesse: `http://localhost:3000`

### Problema: "Backend not found" ou erro de conexão

**Solução:**

1. Verifique se o backend está rodando:
```bash
curl http://localhost:5000/api/health
```

2. Se não funcionar, inicie o backend em outro terminal:
```bash
cd C:\Users\Contingência\Documents\unica-locadora\backend
npm start
```

### Problema: Node modules corrompidos

**Solução:**
```bash
rm -r node_modules package-lock.json
npm install
```

---

## 📱 Estrutura do Projeto

```
frontend/
├── public/
│   └── index.html          # HTML principal
├── src/
│   ├── main.jsx           # Entry point React
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos
│   ├── components/        # Componentes React
│   │   ├── Dashboard.jsx
│   │   ├── Clientes.jsx
│   │   ├── Carros.jsx
│   │   └── Aluguel.jsx
│   └── utils/
│       └── api.js         # Config Axios
├── package.json           # Dependências
└── vite.config.js        # Config Vite
```

---

## 🔧 Comandos Úteis

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm start
nnpm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## 📞 Suporte

Se encontrar problemas:

1. Consulte os logs no terminal
2. Verifique se o backend está rodando
3. Tente limpar cache: `npm cache clean --force`
4. Reinicie Node: feche a aba de comando e abra novamente

---

## ✅ Próximas Etapas

Depois que o frontend estiver rodando:

1. **Teste a Listagem de Clientes**
   - Click em "Clientes"
   - Deve listar dados do backend

2. **Adicione um Novo Cliente**
   - Preencha formulário
   - Click em "Salvar"

3. **Teste Aluguéis**
   - Selecione cliente e carro
   - Defina datas
   - Click em "Criar Aluguel"

---

**TUDO PRONTO! Seu ERP ÚNICA está funcionando! 🚀**
