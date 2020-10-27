import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <ul>
      {data.students.map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  );
}

export default StudentListCard;
