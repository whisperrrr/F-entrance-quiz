import React, { useState } from 'react';
import './StudentTeamCard.css';
import axios from 'axios';

function StudentTeamCard() {
  const [isDivide, setIeDivide] = useState(false);
  // const [dividedStudent, setDividedStudent] = useState();

  const getDividedGroupInfo = () => {
    // TODO 向后端发送请求获取分组数据进行渲染
    axios
      .get('http://localhost:8080/dividedStudent')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const divideToGroup = () => {
    getDividedGroupInfo();
    setIeDivide(true);
  };

  return (
    <div className="student_team">
      <div className="student_team_title">
        <span>分组列表</span>
        <button className="student_team_button" type="button" onClick={divideToGroup}>
          分组学员
        </button>
      </div>
      {isDivide && <div>分组了哟</div>}
    </div>
  );
}

export default StudentTeamCard;
