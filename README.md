# Learn Backend with Node.js - Journey 🚀

This repository is my personal learning journey of **Backend Development** using **Node.js**.  
I will update it **daily** with notes, code examples, and progress.

---

## 📅 Daily Log

### Day 1 (Sep 6, 2025)
- Installed Node.js and set up the environment.
- Learned the **difference between Node.js and Browser**:
  - Browser runs JavaScript in the client (limited to DOM, window, etc.)
  - Node.js runs JavaScript on the server (no DOM, has modules like `fs`, `http`).
- Explored **Global Objects** in Node.js (`__dirname`, `__filename`, `require`, `process`).
- Practiced **`module.exports`** to share functions/variables across files.

### Day 2 (Sep 7, 2025)
- Learned about **Core Node.js Modules**:
  - `os` → system info like uptime, user info, memory.
  - `path` → file paths (`basename`, `dirname`, `join`, `resolve`).
  - `fs` → File system module:
    - `readFileSync`, `writeFileSync` (synchronous methods).
    - `readFile`, `writeFile` (asynchronous methods with callbacks).
  - `http` → created a basic web server with different routes (`/`, `/about`, etc.).
- Understood difference between **synchronous vs asynchronous** file operations.
