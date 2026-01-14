# 🚀 Como Instalar o ÚNICA Localmente (Passo a Passo Para Iniciantes)

Você recebeu esse erro: `npm error enoent Could not read package.json`

**Isso significa que faltava o arquivo `package.json`!** Agora ele já foi criado no repositório. Siga os passos abaixo para baixar tudo e fazer a instalação corretamente.

---

## ✅ Passo 1: Baixar o Repositório Atualizado

Abra o **Prompt de Comando** (cmd) ou **PowerShell** e execute:

```bash
cd C:\Users\Contingência\Documents
git clone https://github.com/CarlosBononi/unica-locadora.git
cd unica-locadora
```

**Explicação:**
- `git clone` = baixa todo o código do GitHub para sua máquina
- `cd unica-locadora` = entra na pasta do projeto

---

## ✅ Passo 2: Verificar se o Node.js Está Instalado

No mesmo Prompt de Comando, execute:

```bash
node --version
npm --version
```

**Resultado esperado:**
```
v18.x.x (ou superior)
9.x.x (ou superior)
```

Se receber um erro tipo `'node' is not recognized`, significa que o Node.js não está instalado. [Clique aqui](https://nodejs.org/) e instale o LTS.

---

## ✅ Passo 3: Instalar as Dependências (AQUI RESOLVEMOS O ERRO!)

Ainda no Prompt de Comando, na pasta `unica-locadora`, execute:

```bash
npm install
```

**O que acontece:**
- npm vai ler o arquivo `package.json`
- Vai baixar e instalar: Express, CORS, dotenv, PostgreSQL (pg)
- Vai criar uma pasta chamada `node_modules` (não mexer!)
- Vai criar um arquivo `package-lock.json` (não mexer!)

**Tempo esperado:** 2-3 minutos (depende da sua internet)

**Resultado esperado:**
```
added 123 packages, and audited 124 packages in 2m 45s
```

---

## ✅ Passo 4: Verificar o Arquivo `.env`

O arquivo `.env` já existe no repositório, mas você precisa verificar se a senha está correta.

No Prompt de Comando, execute:

```bash
type .env
```

Deve exibir algo assim:

```
DB_HOST=db.fmmelazwlxburhplaikt.supabase.co
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=COLOQUE_SUA_SENHA_AQUI
PORT=5000
NODE_ENV=development
```

**Se a senha estiver como `COLOQUE_SUA_SENHA_AQUI`, você precisa atualizar:**

Abra o arquivo `.env` com o **Bloco de Notas** e substitua a senha pelas credenciais reais do Supabase.

---

## ✅ Passo 5: Iniciar o Servidor

Ainda na pasta `unica-locadora`, execute:

```bash
npm start
```

**Resultado esperado:**

```
✓ Server rodando em http://localhost:5000
✓ Conectado ao banco de dados Supabase
```

Se ver esse resultado, **PARABÉNS! 🎉 Seu backend está rodando!**

---

## ✅ Passo 6: Testar a Saúde do Servidor

Abra o **navegador** (Chrome, Firefox, etc) e acesse:

```
http://localhost:5000/api/health
```

**Resultado esperado:**

```json
{
  "status": "OK",
  "timestamp": "2026-01-14T18:30:00.000Z",
  "database": "connected"
}
```

Se aparecer algo assim, o servidor está **100% funcional**!

---

## ⚠️ Se der erro, consulte:

1. **`npm error enoent` novamente?** 
   - Certifique-se de que está na pasta `unica-locadora`
   - Execute `dir` e veja se tem arquivo `package.json`

2. **`Module not found`?**
   - Delete a pasta `node_modules`
   - Delete o arquivo `package-lock.json`
   - Execute `npm install` novamente

3. **Porta 5000 já está em uso?**
   - Abra `.env` e mude `PORT=5000` para `PORT=5001`
   - Execute `npm start` novamente

4. **Erro de conexão com banco de dados?**
   - Verifique se a senha no `.env` está correta
   - Confira se o Supabase está online
   - Execute `DIAGNOSTICO_SERVIDOR.md` para mais ajuda

---

## 🎯 Próximo Passo

Depois que o servidor estiver rodando (`npm start`), abra o **GUIA_POSTMAN_COMPLETO.md** para aprender como testar a API com o Postman!

---

**Dúvidas?** Siga o `DIAGNOSTICO_SERVIDOR.md` ou execute novamente `GUIA_EXECUCAO.md` para referência completa.
