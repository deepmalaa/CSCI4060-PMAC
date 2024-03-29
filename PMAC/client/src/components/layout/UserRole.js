import React, { useState, useEffect } from 'react';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Search = ({
  profile: { profiles, loading },
  getAllProfile,
  getSearchProfile,
}) => {
  const [contacts, setContacts] = useState([]);
  const [searchFname, setSearchFname] = useState('');
  const [searchLname, setSearchLname] = useState('');
  const [searchCWID, setSearchCWID] = useState('');

  useEffect(() => {
    getAllProfile();
  }, [profiles, getAllProfile]);

  return (
    <div>
      <h1 className='text-center mt-4'></h1>
      <form>
        {/* onChange for search */}
        <input
          type='text'
          onChange={(e) => setSearchFname(e.target.value)}
          placeholder='Filter by Firstname'
        />

        {/* onChange for search */}
        <input
          type='text'
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
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {profiles
            .filter((item) => {
              return searchFname.toLowerCase() === '' &&
                searchLname.toLowerCase() === ''
                ? item
                : item.fname
                    .toLowerCase()
                    .includes(searchFname.toLowerCase()) &&
                  item.lname.toLowerCase().includes(searchLname.toLowerCase());
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.userRole}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

Search.propTypes = {
  profile: PropTypes.object.isRequired,
  getAllProfile: PropTypes.func.isRequired,
  getSearchProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getAllProfile, getSearchProfile })(
  Search
);