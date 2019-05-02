import { Alert } from 'rsuite';

const client = new Primus('http://localhost:8000');

client.on('server:broadcast', data => {
  Alert.info(data);
  Alert.error(data);
  Alert.success(data);
  Alert.warning(data);
});

export default client;
