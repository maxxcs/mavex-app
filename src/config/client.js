import { Alert } from 'rsuite';

import { BASE_URL } from '@settings';

const client = new window.Primus(`${BASE_URL}`);

Alert.config({ duration: 3000 });

client.on('server:broadcast', (data) => {
  Alert.info(data);
});

// --------------------------------------------------------

client.on('project:userJoined', async data => {

});

client.on('project:userLeft', async data => {

});

// --------------------------------------------------------

client.on('file:created', async data => {

});

client.on('file:deleted', async data => {

});

client.on('file:userJoined', async data => {

});

client.on('file:userLeft', async data => {

});

// --------------------------------------------------------

client.on('channel:created', async data => {

});

client.on('channel:deleted', async data => {

});

client.on('channel:userJoined', async data => {

});

client.on('channel:userWrite', async data => {

});

client.on('channel:userLeft', async data => {

});

// --------------------------------------------------------

client.on('terminal:created', async data => {

});

client.on('terminal:deleted', async data => {

});

client.on('terminal:userJoined', async data => {

});

client.on('terminal:userWrite', async data => {

});

client.on('terminal:userLeft', async data => {

});

export default client;
