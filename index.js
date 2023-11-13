const http = require('http');

//Create Server objcet

http.createServer((request, response) => {
    //write a response
    response.write('hello wrld');
    response.end();
}).listen(8080, () => console.log('Server running'));