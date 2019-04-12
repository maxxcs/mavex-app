const client = new Primus('http://localhost:8000');

//window.client = client;

client.on('server:message', data => {
  console.log(data);
  client.emit('client:info', 'Custom event');
});

client.on('server:broadcast', data => {
  console.log(data);
});

export default client;
