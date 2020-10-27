import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentListCard.css';

function StudentListCard() {
  const [data, setData] = useState({ students: [{ id: '', name: '' }] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8080/students');
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="student_list_card">
      {data.students.map((i) => (
        <div className="student_card" key={i.id}>{`${i.id}.${i.name}`}</div>
      ))}
    </div>
  );
}

export default StudentListCard;
