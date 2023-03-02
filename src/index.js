import React from 'react';
import ReactDOM from 'react-dom/client';

const elementOne = <h1> PMAC SITE </h1>

function FormOne() {
    return (
        <form>
            <label>
                Enter your name: <input type="text" id="fname" name="fname" />
            </label>
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
        </form>
        )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elementOne);
root.render(<FormOne />);
