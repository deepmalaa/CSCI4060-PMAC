import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

import '../../styles/App.css';

const Navbar = ({auth:{isAuthenticated, loading}, logout}) => {
const authLinks=(
  <ul>
    <li><Link to='/changepassword'>Change Password</Link></li>
      <li><a onClick = {logout} href='/'>Logout</a></li>
      
      
    </ul>
);

const guestLink =(
  <ul>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
);

  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to="/"><i className="fas fa-code"></i>PMAC</Link>
    </h1>
    { !loading && (<Fragment>
      { isAuthenticated ? authLinks: guestLink}
    </Fragment>) }
  </nav>
  )
};

Navbar.propTypes ={
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);
