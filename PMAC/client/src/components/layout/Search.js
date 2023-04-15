import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Search = ({
    profile: {profiles, loading},
    getAllProfile,
    getSearchProfile
}

) =>{
  const [contacts, setContacts] = useState([]);
  const [searchFname, setSearchFname] = useState('');
  const [searchLname, setSearchLname] = useState('');
  const [searchCWID, setSearchCWID] = useState('');

  useEffect(() => {
    getAllProfile();
  }, []);
  

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };


  return (
    <div>
      
        <h1 className='text-center mt-4'></h1>
        <form >
          

            {/* onChange for search */}
            <input type="text"
              onChange={(e) => setSearchFname(e.target.value)}
              placeholder='Filter by Firstname'
            />
          
          

            {/* onChange for search */}
            <input type="text"
              onChange={(e) => setSearchLname(e.target.value)}
              placeholder='Filter by Lastname'
            />
          
        </form>
        <table className='table'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>CWID</th>
            </tr>
          </thead>
          <tbody>
            {profiles
              .filter((item) => {
                return searchFname.toLowerCase() === '' && searchLname.toLowerCase() === ''
                  ? item
                  : item.fname.toLowerCase().includes(searchFname.toLowerCase()) && item.lname.toLowerCase().includes(searchLname.toLowerCase());
              })
              .map((item, index) => (
                <tr key={index}>
                
        
                  <td><Link to={`/studentProfile/${item._id}`}>{item.fname}</Link></td>
                  <td>{item.lname}</td>
                  <td>{item.ulm_email}</td>
                  <td>{item.cwid}</td>

                  {/* <td><button className="btn btn-danger" onClick={navigate(`/StudentProfile/${item._id}`)}>View</button></td> */}
                </tr>
              ))}
              
          </tbody>
        </table>
      
    </div>
  );
}

Search.propTypes = {
    profile: PropTypes.object.isRequired,
    getAllProfile: PropTypes.func.isRequired,
    getSearchProfile: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile
  });
  
  export default connect(mapStateToProps, { getAllProfile, getSearchProfile })(
    Search
  );

