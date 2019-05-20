import React from 'react';

const Message = ({ msgId, userId, avatar, username, content, date }) => {
  return (
    <div className="flex-row" style={{ marginBottom: 20 }}>
      <div className="msg-avatar" style={{ backgroundColor: '#444', width: 45, minWidth: 45, height: 45, minHeight: 45, marginRight: 12, borderRadius: 2 }}>
        
      </div>
      <div className="flex-column msg-section">
        <div className="msg-header">
          <a style={{ marginRight: 8 }}><strong>{username}</strong></a>
          <span style={{ color: '#555' }}>{date}</span>
        </div>
        <div className="msg-content">
          <span>
            {content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
