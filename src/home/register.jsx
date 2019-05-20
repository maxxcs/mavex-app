import React from 'react';
import { InputGroup, Input, Button } from 'rsuite';

const Register = ({ changeDisplay }) => {
  return (
    <div className="flex-column" id="register">
      <div style={{ marginBottom: 25 }}>
        <h2 style={{ margin: 0 }}>Sign up</h2>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 7 }}>
          <span><strong>Username</strong></span>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input type="text" autoFocus={true} />
          </InputGroup>
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 7 }}>
          <span><strong>Email</strong></span>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input type="text" />
          </InputGroup>
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 7 }}>
          <span><strong>Password</strong></span>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input type="password" />
          </InputGroup>
        </div>
      </div>
      <div style={{ marginBottom: 5 }}>
        <div style={{ marginBottom: 7 }}>
          <span><strong>Re-enter password</strong></span>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input type="password" />
          </InputGroup>
        </div>
      </div>
      <div style={{ width: 300, marginBottom: 10 }}>
        <span style={{ fontSize: 10, color: '#AAA' }}>
          By registering, you agree to Mavex's <a className="link">Terms of Service</a> and <a className="link">Privacy Policy</a>.
        </span>
      </div>
      <div className="flex-column" style={{ width: 300, marginBottom: 20 }}>
        <Button appearance="primary" block>Sign up</Button>
      </div>
      <div>
        <span>
          <a className="link" onClick={() => changeDisplay('LOGIN')}>Already have an account?</a>
        </span>
      </div>
    </div>
  );
};

export default Register;
