import React from 'react'
import s from '../styles/FacultyLanding.module.css'
import ulmLogo from '../img/showcase.jpeg';
import Sidebar from '../components/layout/Sidebar';

function FormOne() {
    return (     
        <body>
            <Sidebar role = "faculty"/>
            <div className={s.anything}>
                
                

                <div className={s.topPage}>
                    <div className={s.large}>Welcome to the PMAC Faculty Site</div>
                    <p>This is a simple solution to submitting your faculty evaluation of a student.</p>
                    <p>Please feel free to visit our <a href="#">Help</a> page for any questions!</p>
                    
                    
                </div>


                <div className={s.bottomPage}>
                    
                    <img src={ulmLogo} alt="ULM Logo"/>

                </div>

                <div className={s.foot}>
                    <a href="https://www.ulm.edu/">@ The University of Louisiana Monroe</a>
                </div>
            </div>
        </body>
    )

}

export default FormOne;