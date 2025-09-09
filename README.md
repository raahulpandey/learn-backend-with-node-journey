| Day | Date   | Topics Covered                                                                                                                                                | Status |
| --- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | Sep 6  | Installed Node.js; Node vs Browser JS 🌐; Global Objects (\_\_dirname, \_\_filename, require, process) 🛠; module.exports 🔗                                  | ✅ Done |
| 2   | Sep 7  | Core modules: os, path, fs (sync & async), http; Synchronous vs Asynchronous ⏱                                                                                | ✅ Done |
| 3   | Sep 8  | npm basics 📦 (install/use packages, local vs global); nodemon; Event Loop 🔄                                                                                 | ✅ Done |
| 4   | Sep 9  | Promises 💡 (.then/.catch, resolve/reject); async/await ⚡; Reading multiple files 📂; EventEmitter 🎯; Path management 🔍                                     | ✅ Done |
| 5   | Sep 10 | Streams (createReadStream, chunks, backpressure) 📖; Using streams to handle big files on server 🖥️; HTTP request-response cycle 🌐; Status codes (200 OK) ✅ | ✅ Done |
📝 Key Notes (Compact)

Node vs Browser: Node runs JS on server, browser runs JS on client 🌐

Global Objects: __dirname, __filename, process 🛠

FS Module: readFileSync/writeFileSync (blocking) vs readFile/writeFile (non-blocking) ⏱

Event Loop: Async code doesn’t block sync 🔄

npm: Local vs global packages 📦; nodemon restarts server automatically

Promises & Async/Await: Cleaner than callbacks; await makes async code look sync ⚡

EventEmitter: .on() listens, .emit() triggers 🎯

File Paths: Use ./ and 'utf8' for proper file reads 🔍

Streams: Handle large files in chunks (createReadStream), prevents memory overload 📖

Backpressure: Flow control when writable stream is slower than readable stream 💧

Big Files on Server: Use streams instead of readFile to avoid blocking server 🖥️

HTTP Request/Response: Browser → Request 🌐, Server → Response 🌐

Status Codes: 200 OK means success ✅
