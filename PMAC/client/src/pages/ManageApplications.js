import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';


import Sidebar from '../components/layout/Sidebar';
import SearchApplication from '../components/layout/Search';

import s from '../styles/StudentProfile.module.css';

const ManageApplications = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
  
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  const [isShown, setIsShown] = useState(false);
  return (
    <><div >
      <Sidebar role="admin" />
      
      <div className={s.subTitle1}>Search For a Student's Completed Application <div className={s.subTitle2}>To go to a Student's Application, click on their First Name</div></div>
      <button
            className={s.buttonCust1}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
          </button>
          {isShown && (
            <div className={s.hoverContent1}>
              <div className={s.hoverHead}> 
                Help
              </div>
              <div className={s.hoverText}>
                - To go to a Student's Application, click on their First Name. Underlined in blue.
              </div>

              <div className={s.hoverText}>
                - If two students have the same name, you can identify them by their email or CWID.
              </div>

            </div>
          )}
      
        <SearchApplication />
      </div>
    </>
  );
};

ManageApplications.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  ManageApplications
);