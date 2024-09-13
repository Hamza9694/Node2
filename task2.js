const http = require('http');
const port = process.env.PORT || 3001;

const requestHandler = (request, response) => {
  response.end('This is 2nd Application.');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

