import React, { useState } from 'react';
import myCSS from '../styles/facultyletter.module.css';


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
                    <p>
                        <a href="/FacultyLetter">Submitted Letters</a>
                        <a href="/FacultyAdvisoryForm">Pre-Med Advisory Form</a>
                        <a href="#">Pending Requests</a>
                        <a href="#">User Account</a>
                        <a href="#">Settings</a>
                    </p>
                </div>
                <div className={myCSS.topPage}>
                Faculty Letter Submission
                </div>

                

                <div className={myCSS.Form}>
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Upload a File&nbsp; &nbsp;      
                            <input type="file" onChange={handleFileInputChange} />
                        </label>

                        <br />
                        <div className={myCSS.Submit}>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </body>
    );
}


export default FacultyLetter;