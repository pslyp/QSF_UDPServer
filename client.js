const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const HOST = '127.0.0.1';
const PORT = 33333;

var message = new Buffer('Hello UDP Server');
client.send(message, PORT, HOST, function(err) {
    if(err) throw err;
    console.log('Message sent to ' + HOST + ":" + PORT);
    client.close();
});