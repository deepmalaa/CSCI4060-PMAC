import React, { useState } from 'react';
import facultyForm from '../img/pdf/FacultyForm.pdf';

import myCSS from '../styles/facultyrecform.module.css';



function FacultyRecommendationForm() {

    return (
        <body> 
            <div className={myCSS.App}> 
                
                <div class={myCSS.navbar}>
                    <div className={myCSS.home}>
                        <a href="/dashboardFaculty">HOME</a>
                    </div>
                    <p>
                        <a href="/FacultyLetter">Letter Submission</a>
                        <a href="/FacultyAdvisoryForm">Faculty Form</a>
                        <a href="#">Pending Requests</a>
                        <a href="#">User Account</a>
                        <a href="#">Settings</a>
                    </p>
                </div>

                <iframe className={myCSS.thePage} src={facultyForm} />

                <div className={myCSS.foot}>
                    <a href="https://www.ulm.edu/">@ The University of Louisiana Monroe</a>
                </div>

            </div>
        </body>
    )
    
}

export default FacultyRecommendationForm;