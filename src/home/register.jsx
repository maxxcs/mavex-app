import React from 'react';
import { InputGroup, Input, Button } from 'rsuite';

const Register = ({ changeDisplay }) => (
  <div className="flex-column" id="register">
    <div style={{ marginBottom: 25 }}>
      <h2 style={{ margin: 0 }}>Sign up</h2>
    </div>
    <div style={{ marginBottom: 20 }}>
      <div style={{ marginBottom: 7 }}>
        <span>
          <strong>Username</strong>
        </span>
      </div>
      <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
        <InputGroup style={{ width: 300 }}>
          <Input type="text" autoFocus />
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
          <Input type="text" />
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
          <Input type="password" />
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
          <Input type="password" />
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
      <Button appearance="primary" block>
        Sign up
      </Button>
    </div>
    <div>
      <span>
        <button type="button" className="link" onClick={() => changeDisplay('LOGIN')}>
          Already have an account?
        </button>
      </span>
    </div>
  </div>
);

export default Register;
