const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 5222;

const filePath = path.join(__dirname, 'data.json');
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);

        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, '[]');
        }

        const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        existingData.push(data);

        fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
          if (err) {
            console.log('Error writing file', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Internal server error' }));
          } else {
            console.log('Data saved successfully');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data saved successfully' }));
          }
        });
      } catch (error) {
        console.log('Invalid JSON', error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
      }
    });
  } else if (req.method === 'GET' && req.url === '/details') {
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.log('Error reading file', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Internal server error' }));
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(data); // Send the file content as response
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'No data found' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port} without Express`);
});
