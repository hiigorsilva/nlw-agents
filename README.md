
# NLW Agents

Este projeto é uma API desenvolvida durante o evento NLW da Rocketseat, focada na gestão de perguntas de usuários em lives de streaming.

## Tecnologias e Bibliotecas

- **Node.js** + **TypeScript**
- **Fastify**: Framework web para Node.js
- **Zod**: Validação de schemas e tipagem
- **Drizzle ORM**: ORM para PostgreSQL
- **PostgreSQL**: Banco de dados relacional
- **@fastify/swagger**: Documentação automática da API
- **@fastify/cors**: Suporte a CORS
- **drizzle-seed**: Seed de banco de dados
- **Husky** + **lint-staged** + **biome**: Padronização e lint de código

## Padrões de Projeto

- **Modularização por domínio**: Separação de módulos por contexto (`modules/rooms`, `modules/check`)
- **Type Provider**: Uso de `fastify-type-provider-zod` para tipagem e validação
- **Configuração via `.env`**: Variáveis de ambiente para configuração sensível

## Setup e Configuração

1. **Clone o repositório e instale as dependências:**
   ```sh
   git clone <url-do-repo>
   cd nlw-agents-server
   npm install
   ```

2. **Configure o arquivo `.env`:**
   Copie `.env.exemple` para `.env` e preencha as variáveis:
   ```
   PORT=3333
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/agents
   ```

3. **Suba o banco de dados com Docker:**
   ```sh
   docker-compose up -d
   ```

4. **Rode as migrations e o seed:**
   ```sh
   npm run db:seed
   ```

5. **Inicie o servidor em modo desenvolvimento:**
   ```sh
   npm run dev
   ```

6. **Acesse a documentação da API:**
   - [http://localhost:3333/docs](http://localhost:3333/docs)


Desenvolvido durante o NLW da Rocketseat 🚀