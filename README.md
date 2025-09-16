# 🚀 Node.js + Express.js Learning Log

| Day | Date   | Topics Covered                                                                                                                                                               | Status   |
| --- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 1   | Sep 6  | Installed Node.js; Node vs Browser JS 🌐; Global Objects (__dirname, __filename, require, process) 🛠; module.exports 🔗                                                     | ✅ Done  |
| 2   | Sep 7  | Core modules: os, path, fs (sync & async), http; Synchronous vs Asynchronous ⏱                                                                                              | ✅ Done  |
| 3   | Sep 8  | npm basics 📦 (install/use packages, local vs global); nodemon; Event Loop 🔄                                                                                               | ✅ Done  |
| 4   | Sep 9  | Promises 💡 (.then/.catch, resolve/reject); async/await ⚡; Reading multiple files 📂; EventEmitter 🎯; Path management 🔍                                                     | ✅ Done  |
| 5   | Sep 10 | Streams (createReadStream, chunks, backpressure) 📖; Using streams to run big files on server 🖥️; HTTP request-response cycle 🌐; Status codes (200 OK, etc.) ✅              | ✅ Done  |
| 6   | Sep 11 | HTTP Content-Type (`text/html`, `application/json`) 📑; Why we need **Express.js** 🚀; Different HTTP Status Codes (200, 201, 400, 404, 500) with examples ✅                  | ✅ Done  |
| 7   | Sep 12 | Basics of Express.js routing 🚦 (`app.get`, `app.all`); Sending responses with status codes (200, 404); Serving static files using `express.static`; Sending HTML with `res.sendFile` 📂 | ✅ Done  |
| 8   | Sep 13 | Sending JSON data with Express (`res.json`) 🔗; Dynamic routing with URL params (`req.params`) ✨; Building simple APIs for `/api/products` and `/api/products/:id`; Nested routes (`/reviews/:id`) 🛒 | ✅ Done  |
| 9   | Sep 17 | Express Middleware 🛡️ (`app.use`, custom middleware functions); Order of middleware execution; Applying middleware globally vs route-level; Query parameters (`req.query`) for filtering/searching APIs 🔍 | ✅ Done  |

---

# 📝 Key Concepts (Day 1 → Day 9)

### Day 1 – Node.js Basics
- Node.js runs JS outside browser (server-side).
- Global Objects: `__dirname`, `__filename`, `process`, `require`.
- `module.exports` → export functions/objects across files.

---

### Day 2 – Core Modules
- **OS** → System info (`os.userInfo()`).
- **Path** → File paths (`path.join`, `path.resolve`).
- **FS** → File operations (`readFileSync`, `readFile`).
- **HTTP** → Create servers (`http.createServer`).
- **Sync vs Async** → Async = non-blocking.

---

### Day 3 – npm & Event Loop
- **npm** → Package manager.
- **nodemon** → Auto restart server.
- **Event Loop** → Handles async tasks (callbacks, promises).

---

### Day 4 – Async Programming
- **Promises** → `.then` & `.catch`.
- **async/await** → Cleaner async handling.
- **EventEmitter** → `.on()` listen, `.emit()` trigger.

---

### Day 5 – Streams & HTTP
- **Streams** → Process data in chunks (`createReadStream`).
- **Backpressure** → Balance producer vs consumer.
- **HTTP Cycle** → Request → Server → Response.
- **Status Codes**: `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Server Error`.

---

### Day 6 – Express Intro
- **Content-Type** → `text/html`, `application/json`.
- Why Express? → Easier than Node `http`.
- Status codes in Express → `res.status(200).send("OK")`.

---

### Day 7 – Express Routing & Static Files
- **Routing** → `app.get`, `app.all`.
- **Static Middleware** → `express.static('public')`.
- **res.sendFile** → Send HTML files.

---

### Day 8 – Express APIs
- **res.json** → Send JSON response.
- **req.params** → Get URL parameters.
- APIs:
  - `/api/products` → list products.
  - `/api/products/:id` → single product.
  - Nested routes `/api/products/:id/reviews/:reviewId`.

---

### Day 9 – Middleware & Query Params
- **Middleware** → Functions between req → res.
  - Types: Application-level, Route-level, Built-in, Third-party.
  - Example:  
    ```js
    app.use([authorize, logger])
    ```
- **app.use('/api', logger)** → Run only for `/api/*` routes.
- **Order matters** → Middleware executes top → bottom.
- **req.query** → Get query params.  
  Example: `/api/v1/query?search=phone&limit=2`

---
