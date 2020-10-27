import React, { useState } from 'react';
import './StudentTeamCard.css';

function StudentTeamCard() {
  const [isDivide, setIeDivide] = useState(false);

  function divideToGroup() {
    setIeDivide(true);
  }

  return (
    <div className="student_team">
      <div className="student_team_title">
        <span>分组列表</span>
        <button type="button" onClick={divideToGroup}>
          分组学员
        </button>
      </div>
      {isDivide && <div>分组了哟</div>}
    </div>
  );
}

export default StudentTeamCard;
