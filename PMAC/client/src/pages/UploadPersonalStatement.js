import React, { useEffect  }  from 'react';
import Sidebar from '../components/layout/Sidebar';
import ImageUpload from '../components/imageUpload/personalStatementUpload'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../actions/profile';

const Transcript = ({getCurrentProfile,profile: { profile }}) => {

    useEffect(() => {
        getCurrentProfile();
      }, [getCurrentProfile]);
    // console.log("aaa");
    // console.log(profile.headshot);
    // console.log(user);
    if(profile){
    return(
        
        <div>
        <Sidebar role = "student"/>
        <div>
        <a href={`http://18.209.133.89:5001/api/personalstatement/${profile.personal_statement}`}>Click to preview</a>
        <ImageUpload />
        </div>
      </div>
    );}

}
Transcript.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired


  };

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });

export default connect(mapStateToProps, {getCurrentProfile})(
  Transcript
  
);