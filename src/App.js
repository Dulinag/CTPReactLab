import './App.css';
import React, { useState, useEffect } from 'react';
import StudentInfo from './StudentInfo'
import studentList from'./StudentList'



function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = (event) => {
    setNumClicks(numClicks + 1);
  };

  return (
    <>
    
    
    <div>
      <h1>Welcome to CTP</h1>
      <p>List of Students</p>
      {studentList.map((student) => (
        <StudentInfo {...student} key={student.sId} />
      ))}
    </div>
    
    
    <div>
      <p>The button has been clicked {numClicks} times</p>
      <button onClick={handleClick}>Click this button</button>
    </div>
    
    
    </>
  );
}

export default App;
