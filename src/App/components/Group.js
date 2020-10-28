import React from 'react';
import './Group.css';

function Group(props) {
  const { group, members } = props;

  return (
    <>
      <div className="team-table-title">{`${group + 1} 组`}</div>
      <div className="team-table-content">
        {members.map((member) => (
          <span className="team-member">{`${member.id}.${member.name}`}</span>
        ))}
      </div>
    </>
  );
}

export default Group;
