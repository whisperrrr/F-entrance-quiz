import React, { useState } from 'react';
import './StudentTeamCard.css';
import axios from 'axios';

function StudentTeamCard() {
  // TODO GTB-3: + hooks相关知识点的应用
  const [isDivide, setIeDivide] = useState(false);
  // TODO GTB-4: - 不要提交注释代码
  // const [dividedStudent, setDividedStudent] = useState();

  const getDividedGroupInfo = () => {
    // TODO 向后端发送请求获取分组数据进行渲染
    axios
      .get('http://localhost:8080/dividedStudent')
      .then((response) => {
        // TODO GTB-3: - 可以继续实现
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const divideToGroup = () => {
    getDividedGroupInfo();
    // TODO GTB-4: - 正式请求后不需要setIeDivide状态
    setIeDivide(true);
  };

  return (
    // TODO GTB-3: + 加强语义化标签的使用，如header，section，h*等
    <div className="student_team">
      <div className="student_team_title">
        <span>分组列表</span>
        <button className="student_team_button" type="button" onClick={divideToGroup}>
          分组学员
        </button>
      </div>
      {/* TODO GTB-3: + 条件渲染的应用 */}
      {isDivide && <div>分组了哟</div>}
    </div>
  );
}

export default StudentTeamCard;
