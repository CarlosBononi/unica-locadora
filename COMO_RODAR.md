# 🚀 Como Rodar o ÚNICA ERP (Rápido e Fácil)

## Em 3 Linhas de Comando

```bash
npm install
npm start
```

Pronto! Servidor rodando em **http://localhost:5000**

---

## ✅ Passo a Passo (Se Precisar)

### 1️⃣ Abra o Prompt de Comando

**Windows:**
- Pressione `Win + R`
- Digite `cmd` e aperte Enter

**Ou procure "Prompt de Comando" no menu Iniciar**

---

### 2️⃣ Navegue até a Pasta do Projeto

```bash
cd C:\Users\Contingência\Documents\unica-locadora
```

Se não tiver a pasta, faça download primeiro:

```bash
cd C:\Users\Contingência\Documents
git clone https://github.com/CarlosBononi/unica-locadora.git
cd unica-locadora
```

---

### 3️⃣ Instale as Dependências (Primeira Vez Apenas)

```bash
npm install
```

Aguarde 2-3 minutos. Deve exibir algo como:
```
added 123 packages in 2m 45s
```

---

### 4️⃣ Inicie o Servidor

```bash
npm start
```

**Sucesso?** Verá:
```
✓ Server rodando em http://localhost:5000
✓ Conectado ao banco de dados Supabase
```

---

### 5️⃣ Teste no Navegador

Abra: `http://localhost:5000/api/health`

**Resultado esperado:**
```json
{
  "status": "OK",
  "timestamp": "2026-01-14T18:30:00Z",
  "database": "connected"
}
```

---

## 🔥 Próximas Vezes (Já Instalado)

Bastam 2 comandos:

```bash
cd C:\Users\Contingência\Documents\unica-locadora
npm start
```

---

## 📱 Agora o Que Fazer?

O servidor está rodando! Você tem 2 opções:

### Opção A: Testar a API com Postman
Abra **GUIA_POSTMAN_COMPLETO.md** para aprender como criar clientes, carros e aluguéis via API.

### Opção B: Usar o Dashboard (Frontend)
Ainda não foi criado, mas você pode:
1. Criar no React
2. Conectar às rotas do backend
3. Gerenciar clientes, carros, aluguéis visualmente

---

## ⚠️ Erros Comuns

**"npm: comando não encontido"**
- Node.js não está instalado
- Baixe em: https://nodejs.org/ (versão LTS)

**"Porta 5000 já em uso"**
- Abra `.env` e mude `PORT=5000` para `PORT=5001`
- Execute `npm start` novamente

**"Erro de conexão ao banco de dados"**
- Verifique `.env`: senha está correta?
- Supabase está online?
- Consulte `DIAGNOSTICO_SERVIDOR.md`

---

## 🎯 Resumo: 3 Linhas Para Rodar

```bash
cd C:\Users\Contingência\Documents\unica-locadora
npm install  # (primeira vez)
npm start
```

**Acesse: http://localhost:5000**

Pronto! 🎉
