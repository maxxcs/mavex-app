import React from 'react';
import { Icon } from 'rsuite';

const Tab = ({ fileId, actual, filename }) => {
  const cssContainer = (fileId === actual) ? 'flex-row file-tab file-tab-actual' : 'flex-row file-tab';
  
  return (
    <div className={cssContainer}>
      <a>
        <span style={{ margin: '0px 3px' }}>
          <Icon icon="file" />
        </span>
        <span style={{ margin: '0px 3px' }}>{filename}</span>
      </a>
      <a className="file-tab-close">
        <Icon icon="close" style={{ fontSize: 10, fontWeight: '900' }}  />
      </a>
    </div>
  );
};

export default Tab;
