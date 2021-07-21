import { createServer } from 'http';

const port = process.env.PORT || 8080;

const requestHandler = (request, response) => {
  if (request.url === '/') {
    if (request.method === 'GET') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Hello World\n');
    } else if (request.method === 'POST') {
      response.writeHead(201, { 'Content-Type': 'text/plain' });
      response.end('API');
    }
  }
  if (request.url === '/users') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Users');
  }
};

const server = createServer(requestHandler);

server.listen(port, () => console.log(`Success! Server running on port: ${port}`));
