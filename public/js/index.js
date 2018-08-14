var socket =  io();
socket.on('connect', () => {
    console.log('connected');

    // socket.emit('createMessage', {
    //     from:'yusuf',
    //     text: 'hey',

    // })
});

socket.on('disconnect', () =>{
    console.log('disconnected');

});

socket.on('newMessage', (message) =>{
    console.log('new email', message);

});