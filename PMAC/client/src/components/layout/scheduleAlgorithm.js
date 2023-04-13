import React, { useState, useEffect } from 'react';
import { getCurrentProfile } from '../../actions/profile';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import s from '../../styles/statusBar.module.css';
import { getWaiver } from '../../actions/applicantRelease';
import { useSelector } from 'react-redux';
import { getFacultyForms } from '../../actions/facultyForm';


const ScheduleAlg = ({
    getCurrentProfile,   
    profile: { profile },
  }) => {
   
  
    useEffect(() => {
   
      getCurrentProfile();

    }, [ getCurrentProfile ]);



    return (

        <>
        <div>
            <h1>Testing Sire</h1>

        </div>
        
        </>

        );
    }


    ScheduleAlg.propTypes = {
        getCurrentProfile: PropTypes.func.isRequired,
        profile: PropTypes.object.isRequired,
      };
      
      const mapStateToProps = (state) => ({
        profile: state.profile,
        auth: state.auth,
        
      });
      
      export default connect(mapStateToProps, {getCurrentProfile, getFacultyForms })(
        ScheduleAlg
      );