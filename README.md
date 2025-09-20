# 🚀 Node.js + Express.js Learning Log (Day 1 → Day 12)

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
| 10  | Sep 18 | Working with external `data.js` (products & people arrays) 📦; Serving JSON via `/api/people`; Third-party middleware `morgan` for request logging 📜; Combining custom + built-in + third-party middleware in Express ⚡ | ✅ Done  |
| 11  | Sep 19 | Revision of all topics (Day 1 → 10) 🔄; Reinforced Node.js basics, Express routing, APIs, middleware, query params, JSON data, and third-party middleware usage 📝 | ✅ Done  |
| 12  | Sep 20 | Learned **Postman** 🛠 (testing APIs); Practiced GET & POST requests with Postman; Used `express.json()` & `express.urlencoded()` middleware; Built simple `/api/people` GET/POST APIs and `/login` POST route with validations ✅ | ✅ Done  |


---

# 📝 Key Concepts (Day 1 → Day 12)

### Day 1 – Node Basics
- Node vs Browser JS  
- Globals: `__dirname`, `__filename`, `require`, `process`  
- Export/import modules with `module.exports`

### Day 2 – Core Modules
- `os`, `path`, `fs`, `http`  
- Sync vs Async file handling

### Day 3 – npm & Event Loop
- npm local vs global install  
- `nodemon` for auto-restart  
- Event Loop (phases, async handling)

### Day 4 – Promises & Async
- Promise chaining (`then`, `catch`)  
- async/await  
- Reading multiple files sequentially  
- `EventEmitter` basics

### Day 5 – Streams & HTTP
- `createReadStream`, handling chunks  
- Backpressure in streams  
- HTTP server basics  
- Status codes (`200`, `404`, etc.)

### Day 6 – HTTP & Express Intro
- Content-Types: `text/html`, `application/json`  
- Why Express.js is needed  
- Common status codes (200, 201, 400, 404, 500)

### Day 7 – Express Basics
- `app.get`, `app.all`, routing  
- `res.send`, `res.status`  
- Static files with `express.static`  
- Sending HTML via `res.sendFile`

### Day 8 – JSON & Params
- Sending JSON with `res.json`  
- URL parameters (`req.params`)  
- APIs for `/api/products`, `/api/products/:id`  
- Nested routes like `/reviews/:id`

### Day 9 – Middleware
- Middleware functions with `app.use`  
- Global vs route-level middleware  
- Order of execution matters  
- Query params (`req.query`) for filtering/searching

### Day 10 – Data & Third-Party Middleware
- External `data.js` for `products` & `people`  
- Serving `/api/people` route  
- Third-party middleware (`morgan`)  
- Types of middleware: built-in, custom, third-party

### Day 11 – Revision
- Reviewed **all topics Day 1 → 10**  
- Reinforced: Node basics, core modules, async & promises, HTTP & status codes  
- Express routing & APIs, middleware usage (custom & third-party), query params, JSON handling  
- Practiced integrating multiple concepts in a small project




### Day 12 – Postman & POST Requests
- **Postman** → API testing tool (no browser needed).  
- `express.json()` → Parses incoming JSON data in `req.body`.  
- `express.urlencoded({ extended: false })` → Parses form data from HTML forms.  
- Built `/api/people`:
  - **GET** → returns people array as JSON.  
  - **POST** → accepts `{name: "xyz"}` in body, validates, returns success/failure.  
- Built `/login` route:
  - **POST** with body `{ name: "Rahul" }`.  
  - If valid → returns `welcome Rahul`.  
  - Else → returns `401 please provide valid credentials`.  

✅ Practiced GET/POST in Postman, understood request body, validation, and responses.  

---

# 📸 Postman Screenshots

### 1. GET `/api/people`
Fetch all people from API:  
![GET /api/people](./screenshots/get-people.png)

---

### 2. POST `/api/people`
Send `{ "name": "Rahul" }` in body → Creates new person:  
![POST /api/people](./screenshots/post-people.png)

---

### 3. POST `/login`
Login with name in body → Returns welcome message:  
![POST /login](./screenshots/post-login.png)

