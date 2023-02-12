import React from 'react';
import ReactDOM from 'react-dom/client';
//import ulmLogo from 'images./ulmLogo.png'
import '../styles/student.css';

const elementOne = <h1> PMAC SITE </h1>

function FormOne() {
    return (
        <div className="App"> 
            <header className="App-header">
                <h1> University of Louisiana at Monroe</h1>
                <h3> Pre-Medical Advisory Committee - Student View</h3>
            </header>
            {/*<img src={ulmLogo} alt="ULM Logo" height={200} width={200 } />*/}

           

        </div>
    )
}


export default FormOne;

