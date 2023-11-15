const express = require('express');
const app = express();

// const socket= require('socket.io')

const server = app.listen(3000, ()=>{
    console.log('server is running')
})

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});



// let io = socket(server);

// io.on('connection', (socket) => {
//     console.log('User Connected' +socket.id);

//     socket.on('s1Hit', (data) => {
//         console.log(data);
//         io.emit('resFromS1', data);
//     });

//     socket.on('disconnect', () => {
//         console.log('User Disconnected');
//     });
// });