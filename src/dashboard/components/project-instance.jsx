import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Icon, Whisper, Tooltip, Alert,
} from 'rsuite';

import { showShareProjectModal, showConfigProjectModal, showRemoveProjectModal } from '@dashboard/store/actions';
import { joinProject } from '@general/store/actions'

const ProjectInstance = ({ project, actual }) => {
  const dispatch = useDispatch();

  const openProject = () => {
    dispatch(joinProject(project._id));
  };

  const isActual = () => (project._id === actual ? '#4179a8' : '#CCC');

  return (
    <div className="flex-column project-instance instance-item">
      <div className="flex-row full center-alt">
        <div className="project-instance-title" style={{ color: isActual() }}>
          <button type="button" onClick={() => openProject()}>
            <Icon icon="folder" style={{ fontSize: 18, marginRight: 5 }} />
            <strong>{project.name}</strong>
          </button>
        </div>
        <div className="flex-row project-instance-menu">
          <Whisper delay={250} placement="top" trigger="hover" speaker={<Tooltip>Invite</Tooltip>}>
            <button
              type="button"
              className="highlight"
              onClick={() => dispatch(showShareProjectModal(true))}
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
              onClick={() => dispatch(showConfigProjectModal(true))}
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
              onClick={() => dispatch(showRemoveProjectModal(true))}
            >
              <Icon icon="trash2" style={{ fontSize: 18 }} />
            </button>
          </Whisper>
        </div>
      </div>
      {
        (project.isPublic)
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
