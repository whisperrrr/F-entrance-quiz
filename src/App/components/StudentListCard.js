import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentListCard.css';

function StudentListCard() {
  const [data, setData] = useState({ students: [{ id: '', name: '' }] });

  const fetchData = async () => {
    const result = await axios('http://localhost:8080/students');
    setData(result.data);
  };

  const postStudent = async (student) => {
    await axios.post('http://localhost:8080/student', { id: 16, name: student });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEnterDown = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target.value);
      postStudent(event.target.value);
      fetchData();
    }
  };

  return (
    <div className="student-list-card">
      {data.students.map((i) => (
        <div className="student_card" key={i.id}>{`${i.id}.${i.name}`}</div>
      ))}
      <input type="text" name="newStudent" onKeyDown={handleEnterDown} />
    </div>
  );
}

export default StudentListCard;
