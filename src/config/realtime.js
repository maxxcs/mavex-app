const primus = new Primus('http://localhost:8000');
window.primus = primus;

primus.write('PING!');

primus.on('data', data => {
    console.log(data);
});
