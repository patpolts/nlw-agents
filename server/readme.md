# NLW Agents

Projeto desenvolvido durante o evento da Rocketseat. Trata-se de uma aplicação fullstack com backend em Node.js/Fastify e frontend em React.

## Tecnologias Utilizadas

### Backend (`server/`)
- **Node.js** + **TypeScript**
- **Fastify**: Framework web para APIs rápidas
- **Zod**: Validação de variáveis de ambiente
- **Drizzle ORM**: ORM para PostgreSQL
- **PostgreSQL**: Banco de dados relacional
- **drizzle-seed**: Seed de dados para o banco
- **fastify-type-provider-zod**: Integração Zod/Fastify
- **dotenv**: Variáveis de ambiente

### Frontend (`web/`)
- **React** + **TypeScript**
- **Vite**: Bundler e dev server
- **React Router DOM**: Rotas SPA
- **@tanstack/react-query**: Gerenciamento de dados assíncronos
- **TailwindCSS**: Estilização utilitária
- **Radix UI**: Componentes acessíveis
- **class-variance-authority**, **clsx**, **tailwind-merge**: Utilitários de classes

## Padrões de Projeto

- **Monorepo**: Separação entre `server` (backend) e `web` (frontend)
- **Validação de ambiente**: Uso de Zod
- **Componentização**: Frontend com componentes reutilizáveis
- **ORM tipado**: Drizzle para queries seguras

## Setup e Configuração

### Pré-requisitos
- Node.js 18+
- PostgreSQL rodando localmente (ou via Docker)

### Backend

```sh
cd server
cp  .env # Edite as variáveis conforme necessário
npm install
docker-compose up -d # Opcional, para subir o banco via Docker
npm run db:seed      # Popula o banco com dados fake
npm run dev          # Inicia o servidor em modo desenvolvimento`
```