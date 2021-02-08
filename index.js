const express = require('express');
const path = require('path');
const socket = require('socket.io');

const PORT = process.env.PORT || 3500;
const app = express();


app.use(express.static(path.join(__dirname, './public')));
const server = app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));


const io = socket(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', socket => {
    console.log(`Made socket connection : ${socket.id}`);
    socket.on('chat', data => {
        io.sockets.emit('chat', data);
    })
    socket.on('typing', data => {
        socket.broadcast.emit('typing', data);
    })
})