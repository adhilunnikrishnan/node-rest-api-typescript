# node-rest-api-typescript

## Run with Docker (Node + Redis in a single container)

1. Build the Docker image:

```bash
docker build -t node-rest-redis .
```

2. Make sure you have a `.env` file in the project root with at least:

```env
PORT=3000
NODE_ENV=development
MONGO_URI=mongodb://host.docker.internal:27017/
DATABASE_NAME=rest_api_ts
JWT_SECRET=your_jwt_secret_key
```

3. Start the container (Node app + Redis):

```bash
docker run --env-file .env -p 3000:3000 -p 6379:6379 --name node-rest-redis --rm -d node-rest-redis
```

- API is available at: `http://localhost:3000`
- Redis is available at: `127.0.0.1:6379` (optional, for debugging)
