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

---

# 📝 Key Notes (Day 1 → Day 8)

### Day 1: Node.js Basics
- **Node vs Browser JS**:  
  - Browser → Client-side (DOM, window).  
  - Node.js → Server-side (no DOM, has fs, path, http).  
- **Global Objects**: `__dirname`, `__filename`, `process`, `require`.  
- **module.exports** → Share functions/objects between files.  

---

### Day 2: Core Modules
- **OS Module** → System info (`os.userInfo()`, `os.uptime()`).  
- **Path Module** → Work with file paths (`path.join`, `path.resolve`).  
- **FS Module** → Sync vs Async file operations (`fs.readFileSync`, `fs.readFile`).  
- **HTTP Module** → Create servers (`http.createServer`).  
- **Sync vs Async**: Async is non-blocking.  

---

### Day 3: npm & Event Loop
- **npm** → Install packages locally/globally.  
- **nodemon** → Auto-restarts server on file changes.  
- **Event Loop** → Manages async callbacks (non-blocking).  

---

### Day 4: Async Programming
- **Promises** → Handle async (`.then`, `.catch`).  
- **async/await** → Cleaner async code (await resolves promise).  
- **EventEmitter** → `.on()` = listen, `.emit()` = trigger events.  
- **Path module** → Manage file paths.  

---

### Day 5: Streams & HTTP
- **Streams** → Handle large data in chunks (`createReadStream`).  
- **Backpressure** → Manage fast producers vs slow consumers.  
- **HTTP Request-Response Cycle** 🌐:  
  - Client sends request → Server processes → Sends response.  
- **Status Codes**:  
  - `200 OK` = Success  
  - `201 Created`  
  - `400 Bad Request`  
  - `404 Not Found`  
  - `500 Server Error`  

---

### Day 6: Express Intro
- **Content-Type** → `text/html`, `application/json`.  
- **Why Express** → Simplifies Node’s `http` module (routing, middleware).  
- **HTTP Status Codes in Express** → `res.status(200).send("OK")`.  

---

### Day 7: Express Routing & Static Files
- **Routing**: `app.get`, `app.all` (catch all routes).  
- **Status Codes** → Send different responses with `.status()`.  
- **Static Middleware** → `express.static` to serve static files.  
- **res.sendFile** → Serve HTML files.  

---

### Day 8: Express APIs
- **res.json** → Send JSON response.  
- **req.params** → Access URL parameters (e.g. `/products/:id`).  
- **APIs**:  
  - `/api/products` → return list.  
  - `/api/products/:id` → return single product.  
  - Nested route → `/api/products/:id/reviews/:reviewId`.  

