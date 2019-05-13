import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayTerminalForm } from './actions';
import { Button, Alert, Divider } from 'rsuite';

const TerminalList = ({ displayTerminalForm }) => {
  return (
    <div className="flex-column full" style={{ width: 500, backgroundColor: '#252525', padding: 10 }}>
      <Button appearance='default' block style={{ backgroundColor: '#333344', color: '#CCC' }} onClick={() => displayTerminalForm(true)}>New Terminal</Button>
      <Divider style={{ backgroundColor: '#333', margin: '10px 0px'}} />
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ displayTerminalForm }, dispatch);

export default connect(null, mapDispatchToProps)(TerminalList);
