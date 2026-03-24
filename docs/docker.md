# Docker

## Image ([`Dockerfile`](../Dockerfile))

- **Build:** `npm ci`, `npm run build` → `/app/dist`.
- **Run:** `node:20-alpine`, `serve -s dist -l 3000`, port **3000**.
- **HEALTHCHECK:** Node `http.get('http://localhost:3000')`, expects status **200**.

## Compose ([`docker-compose.yml`](../docker-compose.yml))

Compose sets `healthcheck` to **`curl -f http://localhost:3000`**.

**Gotcha:** The runtime image is **Alpine** and often has **no `curl`**. If health checks fail, install `curl` in the image, align the compose test with the Dockerfile’s Node-based check, or use an image that includes `curl`.
