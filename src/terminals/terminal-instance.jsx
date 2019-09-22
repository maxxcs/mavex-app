import React from 'react';
import {
  Icon, Whisper, Tooltip, Alert,
} from 'rsuite';

const TerminalInstance = ({
  id, actualId, name, msg, msgColor,
}) => {
  const isActual = () => (id === actualId ? '#4179a8' : '#CCC');

  return (
    <div className="flex-column terminal-instance instance-item">
      <div className="flex-row full center-alt">
        <div className="terminal-instance-title" style={{ color: isActual() }}>
          <button type="button" onClick={() => Alert.info('Changing terminal... or not.')}>
            <Icon icon="server" style={{ fontSize: 18, marginRight: 5 }} />
            <strong>{name}</strong>
          </button>
        </div>
        <div className="flex-row terminal-instance-menu">
          <Whisper delay={250} placement="top" trigger="hover" speaker={<Tooltip>Resync</Tooltip>}>
            <button
              type="button"
              className="highlight"
              onClick={() => Alert.success('So much synchronization, very updated!')}
            >
              <Icon icon="refresh" style={{ fontSize: 18 }} />
            </button>
          </Whisper>
          <Whisper
            delay={250}
            placement="topLeft"
            trigger="hover"
            speaker={<Tooltip>Settings</Tooltip>}
          >
            <button
              type="button"
              className="highlight"
              onClick={() => Alert.warning('So much configuration, very options!')}
            >
              <Icon icon="sliders" style={{ fontSize: 18 }} />
            </button>
          </Whisper>
          <Whisper
            delay={250}
            placement="topLeft"
            trigger="hover"
            speaker={<Tooltip>Delete</Tooltip>}
          >
            <button
              type="button"
              className="highlight"
              onClick={() => Alert.error('So much deletion, very erasable!')}
            >
              <Icon icon="trash2" style={{ fontSize: 18 }} />
            </button>
          </Whisper>
        </div>
      </div>
      <div className="flex-row center full center-alt">
        <div className="flex-row center full terminal-instance-msg" style={{ color: msgColor }}>
          <Icon icon="circle" style={{ marginRight: 5 }} />
          <span>{msg}</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalInstance;
