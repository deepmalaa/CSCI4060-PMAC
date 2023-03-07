import React, { useState } from 'react';
import '../styles/StudentLanding.css';
import CheckList from '../components/layout/CheckList';
import Sidebar from '../components/layout/Sidebar';

function StudentLanding() {
    return (
        <>
        <div className = "dashboard ">Student Dashboard</div>
        <div className = "StudentPage1">    
          
        <Sidebar />
        <CheckList/>
        
        </div>
        </>
    )
}

export default StudentLanding;