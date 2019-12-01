import React from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from 'rsuite';

import { closeFile } from '@workspace/store/actions';


const Tab = ({ fileId, actualId, filename }) => {
  const dispatch = useDispatch();
  const classContainer = fileId === actualId ? 'flex-row file-tab file-tab-actual' : 'flex-row file-tab';

  return (
    <div className={classContainer}>
      <button type="button">
        <span style={{ margin: '0px 3px' }}>
          <Icon icon="file" />
        </span>
        <span style={{ margin: '0px 3px' }}>{filename}</span>
      </button>
      <button type="button" className="file-tab-close" onClick={() => dispatch(closeFile(fileId))}>
        <Icon icon="close" style={{ fontSize: 10, fontWeight: '900' }} />
      </button>
    </div>
  );
};

export default Tab;
