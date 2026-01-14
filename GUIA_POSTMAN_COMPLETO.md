# GUIA COMPLETO DO POSTMAN - Para Testar a API Única

## 💫 O QUE É POSTMAN?

Postman é um programa que permite testar APIs sem precisar escrever código complexo.

**SIMPLES:** Você envia dados e recebe respostas do servidor.

---

## 1️⃣ BAIXAR E INSTALAR O POSTMAN

1. Acesse: https://www.postman.com/downloads/
2. Clique em "Download" (versão Windows)
3. Espere o download terminar
4. Abra o arquivo e instale normalmente
5. Abra o Postman

**PRIMEIRA VEZ?**
- Crie uma conta (use email mesmo)
- OU pule criando conta (clique "skip")

---

## 2️⃣ ENTENDER A INTERFACE DO POSTMAN

**Partes principais que você precisa conhecer:**

1. **Área de URL** - Onde você cola o endereço da API
2. **Método HTTP** - GET, POST, PUT, DELETE
3. **Body** - Dados que você quer enviar
4. **Send** - Botão para enviar a requisição
5. **Response** - Resposta do servidor

---

## 3️⃣ PRIMEIRO TESTE: VERIFICAR SE O SERVIDOR FUNCIONA

### PASSO 1: Criar nova requisição

1. No Postman, clique em: **+ (novo)**
2. Ou: **File > New > HTTP Request**

### PASSO 2: Escolher o tipo de requisição

- Você vai ver um dropdown que diz "GET"
- Deixe como "GET" por enquanto

### PASSO 3: Colocar a URL

1. Na caixa de texto onde diz "Enter request URL", cola isso:
   ```
   http://localhost:5000/api/health
   ```

### PASSO 4: Enviar

1. Clique no botão azul **"Send"**
2. Espere alguns segundos

### PASSO 5: Ver a resposta

**Se funcionou, vai aparecer algo assim:**
```json
{
  "status": "OK",
  "mensagem": "Servidor Única está funcionando com sucesso!",
  "timestamp": "2026-01-14T20:30:45.123Z"
}
```

**SE NÃO FUNCIONAR:**
- Confira se o servidor está rodando (cmd aberto com npm start)
- Confira se digitou a URL corretamente
- Tente novamente

---

## 4️⃣ TESTAR LISTAR CLIENTES (GET)

### Roteiro:

1. **Abra novo Request** (clique "+")

2. **Deixe como GET**

3. **Cole esta URL:**
   ```
   http://localhost:5000/api/clientes
   ```

4. **Clique em "Send"**

5. **Resposta esperada:**
   - Se não tem clientes: `[]` (lista vazia)
   - Se tem clientes: aparecerá uma lista com os dados

---

## 5️⃣ CRIAR NOVO CLIENTE (POST)

### Este é o MAIS IMPORTANTE! Vou detalhar muito bem:

#### PASSO 1: Criar nova requisição

1. Clique em **"+"** para criar novo request

#### PASSO 2: Mudar de GET para POST

1. Clique no dropdown que diz "GET"
2. Procure por "POST" na lista
3. Clique em "POST"

**O que é POST?**
- POST = Enviar dados
- GET = Receber dados

#### PASSO 3: Colocar a URL

Na caixa de texto, cola:
```
http://localhost:5000/api/clientes
```

#### PASSO 4: Preparar os dados (THIS IS IMPORTANT!)

1. Procure pela aba "Body" (fica perto do topo)
2. Clique em "Body"
3. Você vai ver opções: form-data, x-www-form-urlencoded, **raw**, binary
4. **Clique em "raw"**
5. No dropdown ao lado, mude para **"JSON"**

#### PASSO 5: Colar os dados do cliente

**Na caixa de texto grande, cola EXATAMENTE ISSO:**

```json
{
  "nome": "João Silva",
  "cpf": "12345678901",
  "email": "joao@email.com",
  "telefone": "11999999999",
  "endereco": "Rua das Flores, 123"
}
```

**IMPORTANTE:**
- Use ASPAS duplas (") em todos os campos
- Não coloque vírgula depois do último campo
- Copie EXATAMENTE como está acima

#### PASSO 6: Enviar

1. Clique em **"Send"**
2. Espere a resposta

#### PASSO 7: Ver o resultado

**Resposta esperada (se funcionou):**
```json
{
  "id": 1,
  "nome": "João Silva",
  "cpf": "12345678901",
  "email": "joao@email.com",
  "telefone": "11999999999",
  "endereco": "Rua das Flores, 123"
}
```

**SE DEU ERRO:**
- Erro 400: Dados inválidos (confira a sintaxe JSON)
- Erro 500: Problema no servidor
- Erro de conexão: Servidor não está rodando

---

## 6️⃣ CRIAR NOVO CARRO (POST)

### Mesmo processo que cliente!

#### URL:
```
http://localhost:5000/api/carros
```

#### Dados (Body - raw - JSON):
```json
{
  "placa": "ABC1234",
  "modelo": "JAC J6",
  "marca": "JAC",
  "ano": 2023,
  "diaria": 350.00,
  "status": "disponivel"
}
```

---

## 7️⃣ CRIAR NOVO ALUGUEL (POST)

#### URL:
```
http://localhost:5000/api/aluguel
```

#### Dados (Body - raw - JSON):
```json
{
  "cliente_id": 1,
  "carro_id": 1,
  "data_inicio": "2026-01-14",
  "data_fim": "2026-01-21",
  "valor_total": 2450.00,
  "status": "ativo"
}
```

**IMPORTANTE:**
- cliente_id deve ser um ID de cliente existente
- carro_id deve ser um ID de carro existente
- As datas devem estar no formato: YYYY-MM-DD

---

## 8️⃣ RESOLVER ERROS COMUNS

### Erro: "Could not get any response"

**Causa:** Servidor não está rodando

**Solução:**
- Abra o cmd
- Navegue até a pasta do projeto
- Execute: `npm start`
- Espere aparecer a mensagem de sucesso
- Tente novamente

### Erro: "400 Bad Request"

**Causa:** Dados inválidos no JSON

**Solução:**
- Copie um exemplo deste guia
- Verifique se tem todas as aspas duplas
- Verifique se não tem vírgula extra
- Tente novamente

### Erro: "500 Internal Server Error"

**Causa:** Problema no servidor ou banco de dados

**Solução:**
- Procure a mensagem de erro no cmd
- Verifique se o .env tem a senha correta
- Verifique se o Supabase está disponível
- Reinicie o servidor

---

## 9️⃣ DICAS IMPORTANTES

1. **Sempre deixe o servidor rodando** - Em um cmd separado
2. **Use JSON correto** - Copie dos exemplos deste guia
3. **Preste atenção nos IDs** - Quando criar aluguel, use IDs reais
4. **Salve suas requisições** - Postman permite salvar collections
5. **Use Ctrl+Shift+P** - Para formatar o JSON automaticamente

---

## 🌟 RESUMO FINAL

| Operação | Método | URL | Body |
|---|---|---|---|
| Verificar servidor | GET | http://localhost:5000/api/health | Não |
| Listar clientes | GET | http://localhost:5000/api/clientes | Não |
| Criar cliente | POST | http://localhost:5000/api/clientes | JSON |
| Listar carros | GET | http://localhost:5000/api/carros | Não |
| Criar carro | POST | http://localhost:5000/api/carros | JSON |
| Listar aluguéis | GET | http://localhost:5000/api/aluguel | Não |
| Criar aluguel | POST | http://localhost:5000/api/aluguel | JSON |

---

**SUCESSO! VOCÊ JA SABE USAR POSTMAN!** 🚀
