import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentListCard.css';

function StudentListCard() {
  const [data, setData] = useState({ students: [{ id: '', name: '' }] });

  useEffect(() => {
    // TODO GTB-3: * hooks及异步函数的应用
    const fetchData = async () => {
      const result = await axios('http://localhost:8080/students');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    // TODO GTB-3: - 注意使用列表语义化标签
    // TODO GTB-4: - class命名遵循a-b-c
    <div className="student_list_card">
      {data.students.map((i) => (
        <div className="student_card" key={i.id}>{`${i.id}.${i.name}`}</div>
      ))}
      <input type="text" name="new-student" />
    </div>
  );
}

export default StudentListCard;
