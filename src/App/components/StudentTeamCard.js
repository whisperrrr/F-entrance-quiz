import React, { useState } from 'react';
import './StudentTeamCard.css';
import axios from 'axios';
import Group from './Group';

function StudentTeamCard() {
  const [isDivide, setIsDivide] = useState(false);
  const [dividedStudent, setDividedStudent] = useState({ dividedStudent: [[{ id: 1, name: '' }]] });

  const divideToGroup = () => {
    axios
      .get('http://localhost:8080/dividedStudent')
      .then((response) => {
        setDividedStudent(response.data);
        setIsDivide(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="student-team">
      <div className="student-team-title">
        <span>分组列表</span>
        <button className="student-team-button" type="button" onClick={divideToGroup}>
          分组学员
        </button>
      </div>
      {isDivide && dividedStudent && (
        <div className="student-team-card">
          {dividedStudent.dividedStudent.map((i, index) => (
            <Group group={index} members={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentTeamCard;
