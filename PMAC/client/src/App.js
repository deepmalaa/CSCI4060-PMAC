import React, {Fragment, useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import CreateProfile from './pages/CreateProfile';
import FacultyLanding from './pages/FacultyLanding';
import StudentLanding from './pages/StudentLanding';
import PrivateRoute from './components/auth/PrivateRoute';


//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './styles/App.css';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store = {store}>
    <BrowserRouter>
    <Fragment>
    
    <Navbar />

    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/createProfile" element={<CreateProfile/>} />
        <Route path="/dashboardFaculty" element={<PrivateRoute component ={FacultyLanding} />} />
        <Route path="/dashboardStudent" element={<PrivateRoute component ={StudentLanding} />} />
        
    </Routes>
    
    <section className="container">
      { <Alert /> }
      <Routes>  
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
      
      
      </Routes>
    </section>
    </Fragment>
    </BrowserRouter>
    </Provider>
  );
}



export default App;