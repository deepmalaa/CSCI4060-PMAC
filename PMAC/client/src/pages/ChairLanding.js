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
      
      <div className={s.adminHeader}>
      Admin Page for ULM PMAC 
     </div>
     <div className={s.adminContainer}>
    <div className={s.adminHeader}>
      <img src={building} alt="Your Image" className={s.adminImage} />
    </div>
    
    <div className={s.adminInfo}>
      ULM PMAC admin page is a web-based interface designed to manage the ULM PMAC system. 
      It provides the administrators with the ability to perform various tasks such as managing 
      user accounts, monitoring system performance, configuring system settings, managing data backups,
      and more. The admin page allows the ULM PMAC system to be easily managed, ensuring smooth and 
      efficient system operation.
    </div>
    
    <div className={s.websiteStatus}>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Quick Check</Button>
      </OverlayTrigger>
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
