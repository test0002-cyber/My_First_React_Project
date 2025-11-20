Running the project (frontend + backend)

This repository contains a Vite + React frontend and a minimal Express backend in `server/`.

Quick start (frontend only)

```bash
cd "/home/shubhamdhyani/Downloads/review insights"
# install frontend deps (if not done)
npm install
# start frontend dev server (Vite)
npm start
# opens on a local port (3000-3010 etc). Example: http://localhost:3004/
```

Run backend server

```bash
cd "/home/shubhamdhyani/Downloads/review insights/server"
# install server deps (only needed once)
npm install
# start the server (Express on port 4000)
npm start
# or from project root
# npm run server
```

Run both frontend and backend together (recommended during development)

```bash
cd "/home/shubhamdhyani/Downloads/review insights"
# install root dev deps (concurrently) and frontend deps
npm install
cd server && npm install
# back at project root
npm run dev:all
```

Notes & troubleshooting

- Missing "start" script error: If you see `npm ERR! Missing script: "start"`, run `npm run dev` instead, or use the provided `start` script.
- Ports in use: Vite will attempt ports 3000–3010. If a port is in use you can either kill the process using that port, or specify a host/port:

```bash
# run on a specific port (example 5173):
PORT=5173 npm start
# or directly with Vite:
npx vite --port 5173
```

- Bring a suspended job back to foreground:

```bash
# list jobs
jobs -l
# bring most recent job to foreground
fg
```

- If the `dev:all` command fails with `concurrently` not found, run:

```bash
npm install
```

- To open the static preview I added (no build required):

```bash
xdg-open "/home/shubhamdhyani/Downloads/review insights/preview/reports_preview.html"
# or
cd "/home/shubhamdhyani/Downloads/review insights/preview" && python3 -m http.server 8000
# then open http://localhost:8000/reports_preview.html
```

Next steps I can do for you

- Add a single command to install both frontend and server deps automatically.
- Add a `dev:docker` Docker Compose setup to run both services in containers.
- Add a `start:prod` that builds the frontend and serves with the Express server.

Tell me which of the above you want next and I'll add it.
