import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  InputGroup, Input, Button, Divider, Alert,
} from 'rsuite';

import { userAuthenticate } from '../general/actions';

const Login = ({ changeDisplay }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);

  const clearForm = () => {
    setUsername('');
    setPassword('');
  };

  const switchForm = (evt) => {
    if (evt) evt.preventDefault();
    clearForm();
    changeDisplay('REGISTER');
  };

  const authenticate = async (evt) => {
    try {
      evt.preventDefault();
      setBusy(true);
      if (!username || !password) {
        Alert.warning('Login or password cannot be empty.');
        setBusy(false);
      } else {
        const { data } = await axios.post('http://localhost:8000/login', { username, password });
        Alert.success('Success!');
        console.log(data);
        setBusy(false);
        // dispatch(userAuthenticate(data));
      }
    } catch ({ response }) {
      Alert.warning(response.data.message);
      setBusy(false);
    }
  };

  return (
    <form className="flex-column home-login" onSubmit={(evt) => authenticate(evt)}>
      <div>
        <h2>Sign in</h2>
      </div>
      <div>
        <div style={{ marginBottom: 7 }}>
          <strong>Username</strong>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input
              type="text"
              autoFocus
              autoComplete="off"
              value={username}
              onChange={(value) => setUsername(value)}
            />
          </InputGroup>
        </div>
      </div>
      <div>
        <div
          className="flex-row"
          style={{ justifyContent: 'space-between', marginBottom: 7, paddingRight: 5 }}
        >
          <strong>Password</strong>
          <Button appearance="link" style={{ padding: 0 }} tabIndex="-1">
            Forgot password?
          </Button>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input type="password" value={password} onChange={(value) => setPassword(value)} />
          </InputGroup>
        </div>
      </div>
      <div className="flex-column" style={{ width: 300 }}>
        <Button appearance="primary" type="submit" loading={busy} block>
          Sign in
        </Button>
        <Divider>
          <span style={{ fontSize: 12, color: '#AAA' }}>New to Mavex?</span>
        </Divider>
        <Button
          style={{ backgroundColor: '#38385A', color: '#CCC' }}
          type="button"
          block
          onClick={(evt) => switchForm(evt)}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default Login;
