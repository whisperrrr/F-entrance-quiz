import React from 'react';

function Group(props) {
  const { group, members } = props;

  return (
    <>
      <div>{`${group} 组`}</div>
      <div>
        {members.map((member) => (
          <span>{`${member.id}.${member.name}`}</span>
        ))}
      </div>
    </>
  );
}

export default Group;
