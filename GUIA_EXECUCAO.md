# GUIA COMPLETO DE EXECUÇÃO - Única ERP

## ATENÇÃO: NÃO TEM EXPERIÊNCIA? SEM PROBLEMA! SIGA PASSO A PASSO!

Este guia foi criado para quem NÃO TEM experiência em programação. Vou explicar cada passo de forma bem detalhada.

---

## 1️⃣ PASSO 1: PREPARAR SEU COMPUTADOR

### O que você precisa instalar (programas essenciais):

#### A) Node.js (gerenciador de pacotes JavaScript)
1. Acesse: https://nodejs.org/
2. Clique em "LTS" (versão recomendada)
3. Baixe e instale no seu computador
4. Durante a instalação, nÃo desmarque nada - deixe tudo selecionado
5. Reinicie seu computador

**COMO VERIFICAR SE FOI INSTALADO CORRETAMENTE:**
- Abra o cmd (Prompt de Comando) em seu computador
- Digitar: `node --version`
- Digitar: `npm --version`
- Se aparecer um número, está correto!

#### B) Git (para clonar o repositório)
1. Acesse: https://git-scm.com/
2. Clique em "Download for Windows"
3. Instale normalmente
4. Reinicie o computador

---

## 2️⃣ PASSO 2: CLONAR O PROJETO NO SEU PC

### O que é "clonar"? É baixar o projeto inteiro do GitHub para seu computador.

1. **Abra o Prompt de Comando (cmd)**
   - Pressione `Win + R`
   - Digite: `cmd`
   - Pressione Enter

2. **Escolha uma pasta para colocar o projeto**
   - Vou usar C:\usuarios\[seu_usuario]\Documentos
   - No cmd, digite: `cd Documentos`
   - Pressione Enter

3. **Clonar o repositório**
   - Copie este comando no cmd:
   ```
   git clone https://github.com/CarlosBononi/unica-locadora.git
   ```
   - Pressione Enter
   - Espere download terminar (pode levar 1-2 minutos)

4. **Entrar na pasta do projeto**
   ```
   cd unica-locadora
   ```
   - Pressione Enter

---

## 3️⃣ PASSO 3: INSTALAR AS DEPENDÉNCIAS

### O que são "dependências"? São programações extras que o projeto precisa para funcionar.

**No mesmo cmd, digite:**
```
npm install
```

- Pressione Enter
- Vai aparecer muita coisa na tela - isso é normal
- Espere até aparecer a mensagem: `added X packages`
- Pode levar 5-10 minutos, seja paciente!

**O que aconteceu?**
- Uma pasta chamada `node_modules` foi criada (não se assuste, é gigante mesmo!)
- Todas as dependencias necessárias foram instaladas

---

## 4️⃣ PASSO 4: CONFIGURAR O ARQUIVO .env

### O arquivo .env contém as informações do banco de dados.

1. **Abra VS Code (ou seu editor preferido)**
   - Pode baixar: https://code.visualstudio.com/
   - Ou use o Bloco de Notas mesmo

2. **Abra a pasta do projeto**
   - No VS Code: Arquivo > Abrir Pasta
   - Selecione: `unica-locadora`

3. **Localize o arquivo `.env` na raiz do projeto**
   - Você já atualizou este arquivo com a senha
   - Verifique se está assim:
   ```
   DB_HOST=db.fmmelazwlxburhplaikt.supabase.co
   DB_PORT=5432
   DB_NAME=postgres
   DB_USER=postgres
   DB_PASSWORD=AQUI_VIRA_SUA_SENHA_DE_VERDADE
   PORT=5000
   NODE_ENV=development
   SUPABASE_URL=https://fmmelazwlxburhplaikt.supabase.co
   SUPABASE_KEY=COLOQUE_SUA_CHAVE_AQUI
   CORS_ORIGIN=http://localhost:3000
   ```

4. **IMPORTANTE**: Guarde este arquivo em um local seguro. Ele contém sua senha!

---

## 5️⃣ PASSO 5: INICIAR O SERVIDOR BACKEND

### O backend é o "coração" da sua aplicação. É aonde tudo funciona!

1. **No cmd, certifique-se que está na pasta unica-locadora**
   - Você deve ver algo como: `C:\Users\Seu_Usuario\Documentos\unica-locadora>`

2. **Digite o comando para iniciar o servidor:**
   ```
   npm start
   ```
   - Pressione Enter
   - Espere aparecer a mensagem:
   ```
   ⚡️  SERVIDOR UNICA INICIADO COM SUCESSO!
   ♾️  Ouvindo na porta: 5000
   🚀 Acesse: http://localhost:5000
   👍 Teste a saúde do servidor: http://localhost:5000/api/health
   ```

3. **SE FUNCIONOU**: Excelente! O servidor está rodando!
   - Deixe este cmd aberto
   - NÃO feche, seno o servidor desliga

---

## 6️⃣ PASSO 6: TESTAR A CONEXÃO COM O BANCO DE DADOS

### Vamos verificar se o backend está se comunicando com o Supabase corretamente!

1. **Abra seu navegador (Chrome, Firefox, etc)**

2. **Acesse este endereço na barra de endereço:**
   ```
   http://localhost:5000/api/health
   ```

3. **O que deveria aparecer:**
   ```json
   {
     "status": "OK",
     "mensagem": "Servidor UNICA está funcionando com sucesso!",
     "timestamp": "2026-01-14T17:30:45.123Z"
   }
   ```

4. **Se aparecer isso** = Parabéns! O servidor está funcionando! 🎉

5. **Se não aparecer**:
   - Procure por erros no cmd
   - Erro comum: "ECONNREFUSED" = Banco de dados não conectou
   - Verifique se o .env tem a senha correta

---

## 7️⃣ PASSO 7: TESTAR AS ROTAS DA API

### As "rotas" são os "caminhos" que podemos acessar no servidor.

#### TESTANDO ROTA DE CLIENTES:

1. **Abra um novo cmd** (deixe o outro aberto!)

2. **Use o programa Postman ou Insomnia para testar** (OU use o Windows PowerShell com curl)

**ALTERNATIVA SIMPLES (usando navegador):**
   - Acesse: `http://localhost:5000/api/clientes`
   - Deve retornar uma lista vazia: `[]`
   - Isso significa que não há clientes cadastrados ainda (normal!)

**SE APARECER ERRO:**
   - Verifique se o .env está correto
   - Verifique se a senha do banco está correta
   - Procure o erro no cmd do servidor

---

## 8️⃣ PASSO 8: CRIAR SEU PRIMEIRO CLIENTE (Teste)

### Vamos inserir um cliente de teste no banco de dados!

**DOWNLOAD POSTMAN (Ferramenta para testar API):**
1. Acesse: https://www.postman.com/downloads/
2. Baixe e instale
3. Abra o Postman

**CRIAR CLIENTE:**
1. No Postman, clique em "+" (Novo)
2. Mude de "GET" para "POST"
3. Cole esta URL:
   ```
   http://localhost:5000/api/clientes
   ```
4. Clique em "Body"
5. Selecione "raw" e escolha "JSON"
6. Cole este código:
   ```json
   {
     "nome": "João Silva",
     "cpf": "12345678900",
     "email": "joao@email.com",
     "telefone": "11999999999",
     "endereco": "Rua das Flores, 123"
   }
   ```
7. Clique em "Send"

**SE FUNCIONAR:**
- Vai aparecer uma resposta assim:
   ```json
   {
     "id": 1,
     "nome": "João Silva",
     "cpf": "12345678900",
     "email": "joao@email.com",
     "telefone": "11999999999",
     "endereco": "Rua das Flores, 123"
   }
   ```
- Parabéns! Cliente criado com sucesso! 🌟

---

## 9️⃣ RESUMO DAS ROTAS API DISPONÍVEIS

### CLIENTES:
- **GET** `/api/clientes` - Listar todos
- **GET** `/api/clientes/:id` - Buscar um por ID
- **POST** `/api/clientes` - Criar novo

### CARROS:
- **GET** `/api/carros` - Listar todos
- **POST** `/api/carros` - Criar novo

### ALUGUÉIS:
- **GET** `/api/aluguel` - Listar todos
- **POST** `/api/aluguel` - Criar novo

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ Configurar .env (PRONTO!)
2. ✅ Instalar dependencias (PRONTO!)
3. ✅ Iniciar servidor (PRONTO!)
4. ✅ Testar conexão (PRONTO!)
5. ⏳ Criar interface gráfica (Frontend React) - PROXIMAMENTE!
6. ⏳ Integrar assinatura digital (D4Sign)
7. ⏳ Colocar em Produção (Deploy)

---

## ❓ DICAS IMPORTANTES

1. **Erros são normais!** Programadores experientes também têm erros
2. **Google é seu amigo** - Se der erro, procure a mensagem de erro no Google
3. **NÃO delete arquivos aleatórios** - Especialmente `node_modules` (mas pode recriar com `npm install`)
4. **Deixe o servidor rodando** - Enquanto desenvolve, mantenha um cmd aberto com o servidor
5. **Guarde sua senha com segurança** - O arquivo .env é privado!

---

## 📱 PRECISA DE AJUDA?

- **Erro no npm**: tente `npm cache clean --force` depois `npm install` novamente
- **Porta 5000 em uso**: mude `PORT=5000` para `PORT=5001` no .env
- **Banco não conecta**: verifique se a senha no Supabase está correta

---

**BOA SORTE E BEM-VINDO AO MUNDO DO DESENVOLVIMENTO!** 🎉
