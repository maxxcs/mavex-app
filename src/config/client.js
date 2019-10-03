import { Alert } from 'rsuite';
import { BASE_URL } from '@settings';

const client = new window.Primus(`${BASE_URL}`);

Alert.config({ duration: 3000 });

client.on('server:broadcast', (data) => {
  Alert.info(data);
});

export default client;
