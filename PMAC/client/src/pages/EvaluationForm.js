import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProfile, getSearchProfile } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';
import css from '../styles/SearchApplication.module.css';
import { updateSchoolStatus } from '../actions/profile';

import s from '../styles/StudentProfile.module.css';

const initialState = {
  MA: '',
  OMA: '',
  PAA: '',
  DA: '',
  Other: '',
};

const EvaluationForm = ({
  profile: { profiles, loading },
  getAllProfile,
  getSearchProfile, updateSchoolStatus
}) => {
  const [contacts, setContacts] = useState([]);
  const [searchFname, setSearchFname] = useState('');
  const [searchLname, setSearchLname] = useState('');
  const [searchCWID, setSearchCWID] = useState('');
  const [applications, setApplications] = useState({});
  const [formData, setFormData] = useState({
    initialState
  });

  const { MA,OMA,PAA,DA,Other, } = formData;

  useEffect(() => {
    getAllProfile();
    setApplications({});
  }, []);

  const handleApplicationChange = (e, studentId, medicalField) => {
    const selectedValue = e.target.value;
    setApplications((prevState) => ({
      ...prevState,
      [studentId]: {
        ...prevState[studentId],
        [medicalField]: selectedValue,
      },
    }));
  };


  
  const handleSubmit = () => {
    const applicationStatuses = Object.entries(applications).map(
      ([studentId, statusObject]) => {
        const statusArray = Object.entries(statusObject).map(
          ([medicalField, status]) => ({ medicalField, status })
        );
        return { studentId, statusArray };
      }
    );
    updateSchoolStatus(applicationStatuses);
  };

  return (
    <div>
      <Sidebar role='admin'/>
      <h1 className="text-center mt-4"></h1>
      <form>
        <input
          type="text"
          onChange={(e) => setSearchFname(e.target.value)}
          placeholder="Filter by Firstname"
        />
        <input
          type="text"
          onChange={(e) => setSearchLname(e.target.value)}
          placeholder="Filter by Lastname"
        />
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>CWID</th>
            <th>Medical Application</th>
            <th>Osteopathic Medical Application</th>
            <th>Physician Assistant Application</th>
            <th>Dental Application</th>
            <th>Other Application Type</th>
          </tr>
        </thead>
        <tbody>
          {profiles
            .filter(
              (item) =>
                searchFname.toLowerCase() === '' &&
                searchLname.toLowerCase() === ''
                  ? item
                  : item.fname &&
                    item.fname
                      .toLowerCase()
                      .includes(searchFname.toLowerCase()) &&
                    item.lname.toLowerCase().includes(searchLname.toLowerCase())
            )
            .filter((item) =>
            searchCWID === '' ? item : item.cwid === searchCWID
            )
            .map((profile) => (
            <tr key={profile.user._id}>
            <td>{profile.fname}</td>
            <td>{profile.lname}</td>
            <td>{profile.cwid}</td>
            <td>
            <select
            value={
            applications[profile.user._id]
            ? applications[profile.user._id].medical
            : ''
            }
            onChange={(e) =>
            handleApplicationChange(e, profile.user._id, 'medical')
            }
            >
            <option value="">Choose</option>
            <option value="Denied">Denied</option>
            <option value="Accepted">Accepted</option>
            <option value="Interview">Interview</option>
            </select>
            </td>
            <td>
            <select
            value={
            applications[profile.user._id]
            ? applications[profile.user._id].osteopathic
            : ''
            }
            onChange={(e) =>
            handleApplicationChange(
            e,
            profile.user._id,
            'osteopathic'
            )
            }
            >
            <option value="">Choose</option>
            <option value="Denied">Denied</option>
            <option value="Accepted">Accepted</option>
            <option value="Interview">Interview</option>
            </select>
            </td>
            <td>
            <select
            value={
            applications[profile.user._id]
            ? applications[profile.user._id].pa
            : ''
            }
            onChange={(e) =>
            handleApplicationChange(e, profile.user._id, 'pa')
            }
            >
            <option value="">Choose</option>
            <option value="Denied">Denied</option>
            <option value="Accepted">Accepted</option>
            <option value="Interview">Interview</option>
            </select>
            </td>
            <td>
            <select
            value={
            applications[profile.user._id]
            ? applications[profile.user._id].dental
            : ''
            }
            onChange={(e) =>
            handleApplicationChange(e, profile.user._id, 'dental')
            }
            >
            <option value="">Choose</option>
            <option value="Denied">Denied</option>
            <option value="Accepted">Accepted</option>
            <option value="Interview">Interview</option>
            </select>
            </td>
            <td>
            <select
            value={
            applications[profile.user._id]
            ? applications[profile.user._id].other
            : ''
            }
            onChange={(e) =>
            handleApplicationChange(e, profile.user._id, 'other')
            }
            >
            <option value="">Choose</option>
            <option value="Denied">Denied</option>
            <option value="Accepted">Accepted</option>
            <option value="Interview">Interview</option>
            </select>
            </td>
            </tr>
            ))}
            </tbody>
            </table>
            <button onClick={handleSubmit}>Submit Changes</button>
            </div>
            );
            };
            
            EvaluationForm.propTypes = {
            profile: PropTypes.object.isRequired,
            getAllProfile: PropTypes.func.isRequired,
            getSearchProfile: PropTypes.func.isRequired,
            };
            
            const mapStateToProps = (state) => ({
            profile: state.profile,
            });
            
            export default connect(mapStateToProps, { getAllProfile, getSearchProfile })(
            EvaluationForm
            );
            
            
            
            
            
             