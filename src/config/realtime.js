const primus = new Primus('http://localhost:8000');
window.primus = primus;

primus.write('PING!');

primus.on('msg', data => {
    console.log(data);
    primus.emit('info', 'msg from custom event');
});

primus.on('broadcast:msg', data => {
    console.log(data);
});
