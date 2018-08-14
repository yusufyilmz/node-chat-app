const path = require('path');
const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000 ;
const publicPath = path.join(__dirname, '../public/');
const socketIO = require('socket.io');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


io.on('connection', (socket) => {
    


    socket.emit('newMessage', {
        from: 'mike@com',
        text: 'hey whatsup',
        createdAt : 123
    });



    socket.on('createMessage', (message) =>{
        console.log('createEmail', message);
    });


    socket.on('disconnect', () =>{
        console.log('disconnected');
    });

});



app.use(express.static(publicPath));


server.listen(port, () => {
    console.log('server started ');
})