import React from 'react';
import {
  Icon, Whisper, Tooltip, Alert,
} from 'rsuite';

const ProjectInstance = ({ id, actualId, name, isPublic }) => {
  console.log({ id, actualId, name, isPublic });
  const isActual = () => (id === actualId ? '#4179a8' : '#CCC');

  return (
    <div className="flex-column project-instance instance-item">
      <div className="flex-row full center-alt">
        <div className="project-instance-title" style={{ color: isActual() }}>
          <button type="button" onClick={() => Alert.info('Changing project... or not.')}>
            <Icon icon="folder" style={{ fontSize: 18, marginRight: 5 }} />
            <strong>{name}</strong>
          </button>
        </div>
        <div className="flex-row project-instance-menu">
          <Whisper delay={250} placement="top" trigger="hover" speaker={<Tooltip>Invite</Tooltip>}>
            <button
              type="button"
              className="highlight"
              onClick={() => Alert.success('So much invitation, very collaborative!')}
            >
              <Icon icon="send-o" style={{ fontSize: 18 }} />
            </button>
          </Whisper>
          <Whisper
            delay={250}
            placement="topLeft"
            trigger="hover"
            speaker={<Tooltip>Edit</Tooltip>}
          >
            <button
              type="button"
              className="highlight"
              onClick={() => Alert.warning('So much edition, very hackable!')}
            >
              <Icon icon="edit" style={{ fontSize: 18 }} />
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
      {
        (isPublic)
          ?
          <div className="flex-row center full instance-item-public-menu">
            <Icon icon="group" style={{ fontSize: 12, marginRight: 5 }} />
            <span style={{ fontSize: 12 }}>Public project</span>
          </div>
          :
          null
      }

    </div>
  );
};

export default ProjectInstance;
