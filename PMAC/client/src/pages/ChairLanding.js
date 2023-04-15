import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';
import building from '../img/MedicalBuilding.jpg';
import s from '../styles/ChairLanding.module.css';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import StudentProfile from '../components/layout/StudentProfile';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h6">Status Check</Popover.Header>
    <Popover.Body>
      Website is <strong>functional</strong> and running!
    </Popover.Body>
  </Popover>
);

const ChairLanding = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <>
      <Sidebar role="admin" />
      
      <div className={s.container}> 
      
        <div className={s.navBar}>
            <div className={s.goldBars}> </div>
                <div className={s.whiteBar}>
                    <ul>
                        <li><a href="/HomePage">Home</a></li>
                        <li><a href="/createAccount">Create Account</a></li>
                        <li><a href="/ContactPage">Contact</a></li>
                        <li><a href="#Help">Help</a></li>
                    </ul>
                </div>
            <div className={s.goldBars}> </div>
        </div>
        <div className={s.picture}>
                <img src={building} alt="building picture"/>
                <div className={s.goldBars}> </div>
        </div>
      
      </div>

      <div className={s.contentBoxW}>
        <div className={s.textTitle}>
            Admin Page for ULM PMAC

        </div>

        <div className={s.textBox}>
          ULM PMAC admin page is a web-based interface designed to manage the ULM PMAC system. 
          It provides the administrators with the ability to perform various tasks such as managing 
          user accounts, monitoring system performance, configuring system settings, managing data backups,
          and more. The admin page allows the ULM PMAC system to be easily managed, ensuring smooth and 
          efficient system operation.
        </div>
        <StudentProfile/>
        <div className={s.websiteStatus}>
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">Quick Check</Button>
          </OverlayTrigger>
        </div>

        <div className={s.foot}>
            <a href="https://www.ulm.edu/">@ The University of Louisiana Monroe</a>
        </div>

      </div>
    </>
  );
};

ChairLanding.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  ChairLanding
);
