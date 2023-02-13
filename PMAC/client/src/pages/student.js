import React from 'react';
import ReactDOM from 'react-dom/client';
import ulmLogo from '../img/ulmLogo.png';
import studentCSS from '../styles/student.module.css';

const elementOne = <h1> PMAC SITE </h1>

function FormOne() {
    return (
        <body className={studentCSS.App}>
            <span className={studentCSS.Logo}>
                <img src={ulmLogo} alt="ULM Logo" height={200} width={200} />
            </span>

            <header className={studentCSS.Header}>
                <h3> Pre-Medical Advisory Committee - Student View</h3>
            </header>

            <div className={studentCSS.navBar}>
                
            </div>

            <div className={studentCSS.footer}>
                <a href="https://www.ulm.edu/" >@ The University of Louisiana Monroe</a>
            </div>

        </body>
       
    )
}


export default FormOne;

