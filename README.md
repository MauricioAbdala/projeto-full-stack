# Desafio Fullstack

# Backend

## Configuração do projeto:

- Clone o repositório
    

- Instale as dependências:
    - Rode o comando `npm i` ou `yarn` para instalar as dependências do projeto.

- Configuração do ambiente:
    - Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example` fornecido.
    - Configure seu banco de dados PostgreSQL com o mesmo nome especificado no arquivo `.env`.

- Database Migration:
    - Faça a migração das tabelas TypeORM para seu banco de dados usando o comando:
        - `npm run typeorm migration:run -- -d ./src/data-source.ts`
        - ou
        - `yarn typeorm migration:run -d ./src/data-source.ts`

- Iniciar o projeto:
    - Inicie o projeto localmente com:
        - `npm run dev`
        - or
        - `yarn dev`

## Requisição de serviços

  API REST para criar, listar, atualizar e excluir dados do banco de dados.

- Database: PostgreSQL
- Tecnologias: TypeScript, TypeORM, Node.js, Express, e outras bibliotecas.

| Método | Endpoint     | Ação              | Permissão        |
|--------|--------------|----------------------------|--------------------|
| POST   | /login       | User login                 | N/A                |
| POST   | /users       | Create a new user          | N/A                |
| GET    | /users       | List all users             | Authenticated user |
| GET    | /users/id    | Read a user based on ID    | Authenticated user |
| PATCH  | /users/id    | Update a user              | Account owner      |
| DELETE | /users/id    | Delete a user              | Account owner      |
| POST   | /contacts    | Create a contact           | Authenticated user |
| GET    | /contacts    | List all contacts          | Authenticated user |
| GET    | /contacts/id | Read a contact based on ID | Authenticated user |
| PATCH  | /contacts/id | Update a contact           | Owner and Manager  |
| DELETE | /contacts/id | Delete a contact           | Owner and Manager  |

# Frontend

## Configuração do projeto:

- Clone o repositório
    

- Instale as dependências:
    Rode o comando `npm i` ou `yarn` para instalar as dependências do projeto.

- Execute a aplicação:
    Para uma experiência perfeita, certifique-se de que a API local deste projeto esteja em execução em sua máquina.
    Execute o comando para inciar a aplicação:
    ```
    npm run dev
    ```
    ou
    ```
    yarn dev
    ```

## Requisição de serviços

Este serviço frontend utiliza uma API REST (Backend) para criar, listar, atualizar e excluir dados do banco de dados.

### Tecnologias usadas:

- TypeScript
- React
- Zod
- Styled-components
- Axios
- React-router-dom
- React-hook-form
- React-hook-form
- other relevant libraries

### Dependência local API:

Certifique-se de que a API local esteja em execução antes de iniciar o projeto de front-end.

