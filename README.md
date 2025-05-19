# Muka Inventa

**Muka Inventa** é uma API RESTful desenvolvida em NestJS com foco em Clean Architecture. Seu objetivo é receber eventos HTTP com diferentes tipos e roteá-los para casos de uso específicos, simulando filas e processamentos desacoplados. Este projeto tem fins educacionais e de portfólio técnico.

## 🧠 Conceito

A API recebe eventos via `POST /events`, contendo:

- `type`: tipo do evento (ex: `user.created`, `order.placed`)
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
> - `Postgres` em `localhost:5432`
> - `PgAdmin` em `http://localhost:5050`

Acesso PgAdmin:
- **Email**: `admin@example.com`
- **Senha**: `admin`

## 🛠️ Instalação do projeto

```bash
git clone https://github.com/seuusuario/muka-inventa.git
cd muka-inventa
npm install
npm run start:dev
```

## 📦 Endpoints

### POST `/events`

```json
{
  "type": "user.created",
  "payload": {
    "id": "123",
    "name": "João"
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
