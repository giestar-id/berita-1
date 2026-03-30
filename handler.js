const fs = require('fs');
const path = require('path');
const url = require('url');
const routes = require('./src/route.js');



const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.json': 'application/json'
};

module.exports = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    if (pathname.length > 1 && pathname.endsWith('/')){
        pathname = pathname.slice(0, -1);
    }

    if (pathname.startsWith('/images/') || pathname.startsWith('/css/') || pathname.endsWith('.js') ) {
        let filePath = path.join(__dirname, 'public', pathname);
        const ext = path.extname(filePath);

       fs.readFile(filePath, (err, data) => {
            if (err) {
                // File not found in public
                res.writeHead(404);
                res.end('Asset Not Found');
                return;
            }
            res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain' });
            res.end(data);
        });
        return;
    }

    // 2. PAGE ROUTING
    // Check if the path exists in our routes definitions
    if (routes[pathname]) {
        try {
            const renderView = routes[pathname];
            const html = renderView(parsedUrl.query); // Pass query params if needed
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        } catch (error) {
            console.error('Rendering Error:', error);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1><p>Something went wrong rendering the page.</p>');
        }
        return;
    }

    // 3. 404 NOT FOUND
    // Default 404 handler
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found</title></head>
        <body style="display:flex; justify-content:center; align-items:center; height:100vh; background:#111; color:white; font-family:sans-serif;">
            <div style="text-align:center">
                <h1 style="font-size:3rem; margin-bottom:1rem">404</h1>
                <p>Page Not Found</p>
                <a href="/" style="color:#fbbf24; text-decoration:none; margin-top:2rem; display:inline-block">Back Home</a>
            </div>
        </body>
        </html>
    `);
}