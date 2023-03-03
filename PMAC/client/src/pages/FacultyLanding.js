import React from 'react'
import s from '../styles/FacultyLanding.module.css'
import ulmLogo from '../img/showcase.jpeg';


function FormOne() {
    return (     
        <body>
            <div className={s.anything}>
                <div class={s.navbar}>
                    <p>
                        <a href="#">Submitted Letters</a>
                        <a href="#">Pending Requests</a>
                        <a href="#">User Account</a>
                        <a href="#">Settings</a>
                    </p>
                </div>
                

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