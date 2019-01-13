const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const HOST = '127.0.0.1';
const PORT = 33333;

server.on('error', function(err) {
    console.log("Server error: " + err.stack);
    server.close();
});

server.on('message', function(msg, remote) {
    console.log(remote.address + ":" + remote.port + " - " + msg);
});

server.on('listening', function() {
    const address = server.address();
    console.log("UDP Server listening on " + address.address + ":" + address.port)
});

server.bind(PORT, HOST);