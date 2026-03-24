# Docker

## Image ([`Dockerfile`](../Dockerfile))

- **Build:** `npm ci`, `npm run build` → `/app/dist`.
- **Run:** `node:20-alpine`, `serve -s dist -l 3000`, port **3000**.
- **HEALTHCHECK:** Node `http.get('http://localhost:3000')`, expects status **200**.

## Compose ([`docker-compose.yml`](../docker-compose.yml))

The service `healthcheck` uses the **same Node `http.get` probe** as the image `HEALTHCHECK`, so it works on **Alpine** without `curl`.
