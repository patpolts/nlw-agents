# NLW Agents

Projeto desenvolvido durante o evento **NLW Agents** da **Rocketseat**. Trata-se de uma aplicação fullstack com backend em Node.js/Fastify e frontend em React com shadcnui.

## Tecnologias Utilizadas

### Backend API (`server/`)
- **Node.js** + **TypeScript**
- **Fastify**: Framework web para APIs rápidas
- **Zod**: Validação de variáveis de ambiente
- **Drizzle ORM**: ORM para PostgreSQL
- **PostgreSQL**: Banco de dados relacional
- **drizzle-seed**: Seed de dados para o banco
- **fastify-type-provider-zod**: Integração Zod/Fastify
- **dotenv**: Variáveis de ambiente
- **Biome** (lint e formatação)

### Frontend APP (`web/`)
- **React 19** + **TypeScript**
- **Vite** (build e dev server)
- **React Router DOM** (rotas SPA)
- **@tanstack/react-query** (gerenciamento de dados assíncronos)
- **TailwindCSS** (estilização utilitária)
- **class-variance-authority**, **clsx**, **tailwind-merge** (utilitários de classes CSS)
- **Radix UI** (componentes acessíveis)
- **Lucide React** (ícones)
- **tw-animate-css** (animações)
- **Biome** (lint e formatação)

---

## Setup e Configuração

### Pré-requisitos
- Node.js 18+
- PostgreSQL rodando localmente (ou via Docker)

### Backend

```sh
cd server                   #Acesse a pasta server (API)
cp .env.example .env        # Copie env.example para .env e edite as variáveis conforme necessário
npm install                 # Instala as depêndencias do projeto
docker-compose up -d        # Opcional, para subir o banco via Docker
npx drizzle-kit generate    #Gera as migrações do schema
npx drizzle-kit migrate     #Executa as migrações geradas no banco
npm run db:seed             # Popula o banco com dados fake
npm run dev                 # Inicia o servidor em modo desenvolvimento`
```   
> Acesse a API em [http://localhost:3333](http://localhost:3333).

### Frontend

```sh
cd web                      # Acessa a pasta web (APP)
npm install                 # Instala as depêndencias do projeto
npm run dev                 # Inicia o app`  
```   

> Acesse a aplicação em [http://localhost:5173](http://localhost:5173).

---

Projeto **NLW Agents** — desenvolvido durante o evento da Rocketseat 🚀