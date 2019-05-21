import React from 'react';
import {
  Icon, Whisper, Tooltip, Alert,
} from 'rsuite';

const ProjectInstance = ({ id, actual, name }) => {
  const isActual = () => (id === actual ? '#4179a8' : '#CCC');

  return (
    <div className="flex-column project-instance instance-item">
      <div className="flex-row full center-alt">
        <div className="project-instance-title" style={{ color: isActual() }}>
          <a onClick={() => Alert.info('Changing project... or not.')}>
            <Icon icon="folder" style={{ fontSize: 18, marginRight: 5 }} />
            <strong>{name}</strong>
          </a>
        </div>
        <div className="flex-row project-instance-menu">
          <Whisper delay={250} placement="top" trigger="hover" speaker={<Tooltip>Invite</Tooltip>}>
            <a
              className="highlight"
              onClick={() => Alert.success('So much invitation, very collaborative!')}
            >
              <Icon icon="send-o" style={{ fontSize: 18 }} />
            </a>
          </Whisper>
          <Whisper
            delay={250}
            placement="topLeft"
            trigger="hover"
            speaker={<Tooltip>Edit</Tooltip>}
          >
            <a
              className="highlight"
              onClick={() => Alert.warning('So much edition, very hackable!')}
            >
              <Icon icon="edit" style={{ fontSize: 18 }} />
            </a>
          </Whisper>
          <Whisper
            delay={250}
            placement="topLeft"
            trigger="hover"
            speaker={<Tooltip>Delete</Tooltip>}
          >
            <a
              className="highlight"
              onClick={() => Alert.error('So much deletion, very erasable!')}
            >
              <Icon icon="trash2" style={{ fontSize: 18 }} />
            </a>
          </Whisper>
        </div>
      </div>
      <div className="flex-row center full center-alt" />
    </div>
  );
};

export default ProjectInstance;
