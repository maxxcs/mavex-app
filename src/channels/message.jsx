import React from 'react';
import PropTypes from 'prop-types';

const Message = ({
  msgId, userId, avatar, username, content, date,
}) => (
  <div className="flex-row" style={{ marginBottom: 20 }}>
    <div
      className="msg-avatar"
      style={{
        backgroundColor: '#444',
        width: 45,
        minWidth: 45,
        height: 45,
        minHeight: 45,
        marginRight: 12,
        borderRadius: 2,
      }}
    />
    <div className="flex-column msg-section">
      <div className="msg-header">
        <button type="button" style={{ marginRight: 8 }}>
          <strong>{username}</strong>
        </button>
        <span style={{ color: '#555' }}>{date}</span>
      </div>
      <div className="msg-content">
        <span>{content}</span>
      </div>
    </div>
  </div>
);

Message.propTypes = {
  msgId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Message;
