import React, { useState } from 'react';
import myCSS from '../styles/facultyletter.module.css';
import filePic from '../img/FileUpload/fileSubmit.png';


function FacultyLetter() {
    const[file, setFile] = useState(null);

    const handleFileInputChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(file);
    }
    
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
                <div className={myCSS.topPage}>
                Faculty Letter Submission
                </div>

                <div className={myCSS.instruction}>
                    (a student) is in the process of applying to a pre-health professional program. 
                    The applicant has asked to be interviewed by ULM's Pre-Medical Advisory Committee.
                    The information you provide will be used only in the admissions/evalutation process. Please complete
                    the <a href="/FacultyRecommendationForm">Faculty Recommendation Form</a> and submit it in the provided box. OR you can submit it as an online form. <a href="/FacultyAdvisoryForm">CLICK HERE</a> to fill it out now.
                </div>


                

                <div className={myCSS.Form}>
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            <input type="file" onChange={handleFileInputChange} />
                            <p>Drop a File Here</p>
                            <div className={myCSS.pic}>
                    
                                <img src={filePic} alt="file submit"/>

                            </div>
                        </label>

                        <br />
                        <div className={myCSS.Submit}>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className={myCSS.foot}>
                    <a href="https://www.ulm.edu/">@ The University of Louisiana Monroe</a>
                </div>
            </div>
        </body>
    );
}


export default FacultyLetter;