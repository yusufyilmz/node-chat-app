var socket = io();
socket.on('connect', () => {
    console.log('connected');

    // socket.emit('createMessage', {
    //     from:'yusuf',
    //     text: 'hey',

    // })
});

socket.on('disconnect', () => {
    console.log('disconnected');

});

socket.on('newMessage', (message) => {
    console.log('new message', message);
    var li =  jQuery('<li></li>');
    li.text(`${message.from} : ${message.text}`);
    console.log(li)
    jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'Frank',
//     text: 'Hi'
// }, function (data) {
//     console.log('Got it', data);
// });


jQuery('#message-form').on('submit', (e) => {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, () => { });
})