import { Alert } from 'rsuite';

const client = new window.Primus('http://localhost:8000');

Alert.config({ duration: 3000 });

client.on('server:broadcast', (data) => {
  Alert.info(data);
});

export default client;
