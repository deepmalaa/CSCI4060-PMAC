import React, { useState, useEffect } from 'react';
import { getCurrentProfile } from '../../actions/profile';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from '../../styles/statusBar.module.css';
import { getWaiver } from '../../actions/applicantRelease';


const StatusBar = ({
    getCurrentProfile, 
    profile: { profile },
    getWaiver
  }
  
  ) => {

    const [searchAuthorize, setSearchFname] = useState('');

    useEffect(() => {
      getCurrentProfile();
      getWaiver();
    }, [getCurrentProfile, getWaiver]);

    

  return (
    <div>
      
        <div className = {s.container}>


        {getWaiver = (item) => {

              return item.map((item, index) => (
                <tr key={index}>
                  <td>{item.authorize}</td>
                </tr>
              ));
            
            }
  }



        <div className={s.grayRight}>
                <span>Status</span>
                <ul>
                  <li><div className = {s.circle}>{
                    
                  }</div><a href="#Home">Application Form</a></li>
                  <li><div className = {s.circle}></div><a href="#account">Release Form</a></li>
                  <li><div className = {s.circle}></div><a href="#contact">Personal Statement</a></li>
                  <li><div className = {s.circle}></div><a href="#Help">Unofficial Transcript</a></li>
                  <li><div className = {s.circle}></div><a href="#Home">Schedule</a></li>
                  <li><div className = {s.circle}></div><a href="#account">Photo</a></li>
                  <li><div className = {s.circle}></div><a href="#contact">ACMAS (if applicable)</a></li>
                  <li><div className = {s.circle}></div><a href="#Help">Recommendation Letter</a></li>
                </ul>
              </div>
        </div>
      
    </div>
  );
}

StatusBar.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    getWaiver: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile
  });
  
  export default connect(mapStateToProps, { getWaiver, getCurrentProfile })(
    StatusBar
  );