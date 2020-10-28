import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentListCard.css';

function StudentListCard() {
  const [data, setData] = useState({ students: [{ id: '', name: '' }] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8080/students');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="student-list-card">
      {data.students.map((i) => (
        <div className="student_card" key={i.id}>{`${i.id}.${i.name}`}</div>
      ))}
      <input type="text" name="new-student" />
    </div>
  );
}

export default StudentListCard;
