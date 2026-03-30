const http = require('http');
const handler = require('./handler.js')

const PORT = 3000;





const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Mode: Native Node.js (No Express)`);
});
