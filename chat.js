// Create WebSocket connection.
const socket = new WebSocket('http://127.0.0.1:5500/');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});