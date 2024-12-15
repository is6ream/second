const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/home': {
            setTimeout(() => {
                const data = 'best free online course'
                response.write(data)
            }, 3000)

            break;
        } default: {
            response.write('404 not found')
        }
    }
    response.end();
});

server.listen(3003)
//19:32