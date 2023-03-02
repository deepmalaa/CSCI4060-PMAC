
import React, { Fragment } from "react";
import Form from './components/Form';

import{BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      
      <Form />
      
      
    </Fragment>
    </Router>
);

export default App;