import React, { useEffect  }  from 'react';
import Sidebar from '../components/layout/Sidebar';
import ImageUpload from '../components/imageUpload/imageUpload'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../actions/profile';

const Headshot = ({getCurrentProfile, auth: { user },profile: { profile }}) => {

    useEffect(() => {
        getCurrentProfile();
      }, [getCurrentProfile]);
    console.log("aaa");
    console.log(profile.headshot);
    console.log(user);
    return(
        
        <div>
        <Sidebar />

        <div className='picturebox'>
        <img src={`api/image/${profile.headshot}`} alt="example"/>
        </div>
        <div>
        <ImageUpload />
        </div>
      </div>
    );

}
Headshot.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired


  };

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });

export default connect(mapStateToProps, {getCurrentProfile})(
  Headshot
  
);