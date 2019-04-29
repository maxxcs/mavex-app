const client = new Primus('http://localhost:8000');

client.on('server:broadcast', data => {
  console.log(data);
});

export default client;
