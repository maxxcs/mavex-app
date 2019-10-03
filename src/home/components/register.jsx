import React, { useState } from 'react';
import {
  InputGroup, Input, Button, Alert,
} from 'rsuite';

import axios from 'axios';

const Register = ({ changeDisplay }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [busy, setBusy] = useState(false);

  const clearForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const switchForm = (evt) => {
    if (evt) evt.preventDefault();
    clearForm();
    changeDisplay('LOGIN');
  };

  const register = async (evt) => {
    try {
      evt.preventDefault();
      setBusy(true);
      if (!username || !email || !password || !confirmPassword) {
        Alert.warning('Things cannot be empty.');
        setBusy(false);
      } else if (password !== confirmPassword) {
        Alert.warning('Things should match.');
        setBusy(false);
      } else {
        const { data } = await axios.post('http://localhost:8000/register', {
          username,
          email,
          password,
        });
        if (data.registered) {
          Alert.success('Successfully registered.');
          setBusy(false);
          switchForm();
        }
      }
    } catch ({ response }) {
      if (response) Alert.warning(response.data.message);
      setBusy(false);
    }
  };

  return (
    <form className="flex-column home-register" onSubmit={(evt) => register(evt)}>
      <div style={{ marginBottom: 25 }}>
        <h2>Sign up</h2>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 7 }}>
          <span>
            <strong>Username</strong>
          </span>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input
              type="text"
              autoFocus
              value={username}
              onChange={(value) => setUsername(value)}
            />
          </InputGroup>
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 7 }}>
          <span>
            <strong>Email</strong>
          </span>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input type="email" value={email} onChange={(value) => setEmail(value)} />
          </InputGroup>
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 7 }}>
          <span>
            <strong>Password</strong>
          </span>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input type="password" value={password} onChange={(value) => setPassword(value)} />
          </InputGroup>
        </div>
      </div>
      <div style={{ marginBottom: 5 }}>
        <div style={{ marginBottom: 7 }}>
          <span>
            <strong>Re-enter password</strong>
          </span>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(value) => setConfirmPassword(value)}
            />
          </InputGroup>
        </div>
      </div>
      <div style={{ width: 300, marginBottom: 10 }}>
        <span style={{ fontSize: 10, color: '#AAA' }}>
          By registering, you agree to Mavex&apos;s
          {' '}
          <button type="button" className="link">
            Terms of Service
          </button>
          {' '}
          and
          {' '}
          <button type="button" className="link">
            Privacy Policy
          </button>
          .
        </span>
      </div>
      <div className="flex-column" style={{ width: 300, marginBottom: 20 }}>
        <Button type="submit" appearance="primary" loading={busy} block>
          Sign up
        </Button>
      </div>
      <div>
        <span>
          <button type="button" className="link" onClick={(evt) => switchForm(evt)}>
            Already have an account?
          </button>
        </span>
      </div>
    </form>
  );
};

export default Register;
