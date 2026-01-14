# DIAGNÓSTICO - Por que o Servidor NÃO está Rodando?

## 🔴 O servidor não inicia? Vamos resolver juntos!

Siga este guia passo a passo para identificar e corrigir o problema.

---

## 1️⃣ VERIFICAR SE O NODE.JS ESTÁ INSTALADO

**Abra o Prompt de Comando (cmd) e digite:**

```bash
node --version
```

**O QUE DEVERIA APARECER:**
- Um número como: `v18.17.0` ou `v20.x.x`

**SE NÃO APARECER OU DISSER "comando não reconhecido":**
- Node.js NÃO está instalado
- Baixe em: https://nodejs.org/
- Instale a versão LTS
- Reinicie o cmd e tente de novo

---

## 2️⃣ VERIFICAR SE npm ESTÁ INSTALADO

```bash
npm --version
```

**O QUE DEVERIA APARECER:**
- Um número como: `9.8.1` ou `10.x.x`

**SE FALHAR:**
- Reinstale Node.js (npm vem com Node.js)

---

## 3️⃣ VERIFICAR SE VOCÊ ESTÁ NA PASTA CORRETA

**No cmd, você deve estar em:**
```
C:\Users\[seu_usuario]\Documentos\unica-locadora>
```

**COMO VERIFICAR:**
- Veja a primeira linha do cmd
- Se não estiver na pasta correta, navegue:

```bash
cd C:\Users\[seu_usuario]\Documentos\unica-locadora
```

---

## 4️⃣ VERIFICAR SE A PASTA node_modules EXISTE

**A pasta node_modules deve estar em:**
```
C:\Users\[seu_usuario]\Documentos\unica-locadora\node_modules
```

**COMO VERIFICAR:**
- No cmd, digite: `dir` e procure por `node_modules`
- Se NÃO existe, execute:

```bash
npm install
```

- Espere 5-10 minutos até aparecer: `added X packages`

---

## 5️⃣ VERIFICAR SE O ARQUIVO .env EXISTE E ESTÁ CORRETO

**O arquivo `.env` deve estar em:**
```
C:\Users\[seu_usuario]\Documentos\unica-locadora\.env
```

**CONTEÚDO QUE DEVE TER:**
```
DB_HOST=db.fmmelazwlxburhplaikt.supabase.co
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=SUA_SENHA_DO_SUPABASE
PORT=5000
NODE_ENV=development
SUPABASE_URL=https://fmmelazwlxburhplaikt.supabase.co
SUPABASE_KEY=SUA_CHAVE_DO_SUPABASE
CORS_ORIGIN=http://localhost:3000
```

**IMPORTANTE:** A senha e chave devem ser REAIS (não pode ter placeholders)

---

## 6️⃣ VERIFICAR SE O ARQUIVO server.js EXISTE

**O arquivo deve estar em:**
```
C:\Users\[seu_usuario]\Documentos\unica-locadora\backend\server.js
```

**COMO VERIFICAR:**
- No cmd, digite: `dir backend`
- Deve aparecer: `server.js`

---

## 7️⃣ TENTAR INICIAR O SERVIDOR COM COMANDO COMPLETO

**Se ainda não funciona, tente:**

```bash
node backend/server.js
```

**PRESTE ATENÇÃO NA MENSAGEM DE ERRO:**
- Procure por: `Error`, `cannot find`, `not found`
- Copie a mensagem de erro inteira

---

## 8️⃣ ERROS COMUNS E SOLUÇÕES

### ❌ ERRO: "Cannot find module 'express'"

**SOLUÇÃO:**
```bash
rm -rf node_modules
npm cache clean --force
npm install
```

### ❌ ERRO: "ECONNREFUSED" (não conecta ao banco)

**CAUSAS POSSÍVEIS:**
1. A senha no `.env` está errada
2. O Supabase está fora do ar (improvável)
3. Você não tem internet

**SOLUÇÃO:**
- Verifique a senha no Supabase: https://supabase.com/dashboard
- Vá em: Database > Settings > Password
- Copie a senha e atualize no `.env`

### ❌ ERRO: "Port 5000 is already in use"

**CAUSA:** Já existe algo rodando na porta 5000

**SOLUÇÃO 1 - Mude a porta:**
```
PORT=5001
```
- Salve o `.env`
- Inicie o servidor novamente

**SOLUÇÃO 2 - Libere a porta:**
```bash
netstat -ano | findstr :5000
taskkill /PID [número_do_PID] /F
```

### ❌ ERRO: ".env is not defined"

**CAUSA:** Variáveis de ambiente não estão carregando

**SOLUÇÃO:**
```bash
npm install dotenv
```

---

## 9️⃣ LIMPEZA COMPLETA (Nuclear Option)

**Se nada funcionar, tente isso:**

```bash
# Apagar node_modules e package-lock.json
rm -rf node_modules
rm package-lock.json

# Limpar cache do npm
npm cache clean --force

# Reinstalar tudo
npm install

# Tentar iniciar
npm start
```

---

## 🟢 SERVIDOR FUNCIONANDO!

**Se você vê isso, SUCESSO!**

```
⚡️  SERVIDOR UNICA INICIADO COM SUCESSO!
♾️  Ouvindo na porta: 5000
🚀 Acesse: http://localhost:5000
👍 Teste a saúde do servidor: http://localhost:5000/api/health
```

---

## 📱 TESTE NO NAVEGADOR

1. **Abra seu navegador (Chrome, Firefox, Edge)**

2. **Acesse:**
   ```
   http://localhost:5000/api/health
   ```

3. **Deve aparecer:**
   ```json
   {
     "status": "OK",
     "mensagem": "Servidor UNICA está funcionando com sucesso!",
     "timestamp": "2026-01-14T20:30:45.123Z"
   }
   ```

4. **Se aparecer isso = SERVIDOR RODANDO COM SUCESSO!** ✅

---

## 📝 ANOTAR INFORMAÇÕES PARA DEBUGGING

**Se ainda não funcionar, anote:**

1. Qual o EXATO erro que aparece no cmd?
2. Qual versão do Node.js? (digite: `node --version`)
3. Qual versão do npm? (digite: `npm --version`)
4. Qual sistema operacional? (Windows 10/11? macOS? Linux?)
5. Qual pasta está o projeto?
6. O arquivo `.env` existe?

**Com essas informações, fica muito mais fácil resolver!**

---

## 🚀 PRÓXIMO PASSO

Quando o servidor ESTIVER RODANDO:

1. Deixe o cmd aberto
2. Abra outro cmd
3. Siga o **GUIA_POSTMAN.md** para testar a API!

---

**LEMBRE-SE: Erros são normais na programação! Você consegue!** 💪
