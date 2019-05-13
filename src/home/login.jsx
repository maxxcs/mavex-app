import React from 'react';
import { InputGroup, Input, Button, Divider } from 'rsuite';

const Login = ({ changeDisplay }) => {
  return (
    <div className="flex-column" id="login">
      <div style={{ marginBottom: 25 }}>
        <h2 style={{ margin: 0 }}>Sign in</h2>
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
      <div style={{ marginBottom: 25 }}>
        <div className="flex-row" style={{ justifyContent: 'space-between', marginBottom: 7, paddingRight: 5 }}>
          <span><strong>Password</strong></span>
          <Button appearance="link" style={{ padding: 0 }}>Forgot password?</Button>
        </div>
        <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
          <InputGroup style={{ width: 300 }}>
            <Input type="password" />
          </InputGroup>
        </div>
      </div>
      <div className="flex-column" style={{ width: 300 }}>
        <Button appearance="primary" block>Sign in</Button>
        <Divider>
          <span style={{ fontSize: 12, color: '#AAA' }}>New to Mavex?</span>
        </Divider>
        <Button block style={{ backgroundColor: '#38385A', color: '#CCC' }} onClick={() => changeDisplay('REGISTER')}>Sign up</Button>
      </div>
    </div>
  );
};

export default Login;
