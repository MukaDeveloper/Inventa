# Muka Inventa

**Muka Inventa** é uma API RESTful desenvolvida em NestJS com foco em Clean Architecture. Seu objetivo é receber eventos HTTP com diferentes tipos e roteá-los para casos de uso específicos, simulando filas e processamentos desacoplados. Este projeto tem fins educacionais e de portfólio técnico.

## 🧠 Conceito

A API recebe eventos via `POST /events`, contendo:

- `type`: tipo do evento (ex: `health-check`, `cron`, `payment`)
- `payload`: dados dinâmicos relacionados ao evento

Cada evento é roteado internamente para o caso de uso apropriado com base no tipo. O processamento pode ser imediato ou agendado em uma fila simulada.

## 🏗️ Arquitetura

O projeto segue os princípios da **Clean Architecture**, dividido em:

```
src/
├── domain/         # Entidades e interfaces puras
├── application/    # Casos de uso e orquestração
├── infrastructure/ # Adapters como fila, logger, banco
├── presentation/   # Controllers e rotas HTTP
```

## 🚀 Tecnologias

- NestJS
- TypeORM
- PostgreSQL
- PgAdmin
- Docker
- Redis (opcional)

## 🐳 Subindo ambiente com Docker

Crie o arquivo `docker-compose.yml`:

```bash
docker-compose up -d
```

> Isso iniciará:
>
> - `Postgres` em `http://localhost:5432`
> - `PgAdmin` em `http://localhost:5050`
> - `Redis` em `http://localhost:6379`

Acesso PgAdmin:

- **Email**: `admin@example.com`
- **Senha**: `admin`

## 🛠️ Instalação do projeto

> Processo completo
```bash
git clone https://github.com/MukaDeveloper/Inventa.git
cd muka-inventa
npm install
cp .env.example .env
docker-compose up -d
npm run start:dev
```

## 📦 Endpoints

### POST `/events`

```json
{
  "type": "health-check",
  "payload": {
    "id": "123",
    "name": "Samuel",
    "joinedAt": "Mon May 19 2025 09:28:12 GMT-0300"
  }
}
```

## 📌 Próximos passos

- [ ] Implementar fila em memória ou Redis
- [ ] Persistência de eventos
- [ ] Documentação Swagger
- [ ] Testes com Jest
- [ ] CLI para popular eventos e processar fila

## 📄 Licença

MIT
