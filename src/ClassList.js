
import './App.css';
import React, { useState, useEffect } from 'react';


function ClassList() {
    return (
      <div>
        <h1>Welcome to CTP</h1>
        <p>List of Students</p>
        <StudentInfo firstName="Sally" lastName="James" />
        <StudentInfo />
        <StudentInfo />
      </div>
    );
  }

export default ClassList;