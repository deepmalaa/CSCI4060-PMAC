import React, { useState } from 'react';
import jwt from 'jwt-decode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import {
    FaTh,
    FaWpforms,
    FaHouseUser,
    FaClipboardList,
    FaFileSignature,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaIdCard,
    FaBook,
    FaRegEdit,
    FaCaretDown,
    FaGlobe,
    FaThList,
    FaRegSun,
    FaCalendarAlt,
    FaUserGraduate,
    FaFlask,
    FaBriefcase,
    FaBriefcaseMedical,
    FaGraduationCap
}
from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'
import '../../styles/Sidebar.css'

const Sidebar = ({isAuthenticated}) => {
  console.log("Authenticated? " + isAuthenticated)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    var role = "guest";


    if(isAuthenticated){
      const user = jwt(localStorage.token);
      console.log(user.role);
      if(user.user.role === "Student")
        role = "student";
      if(user.user.role === "Committee")
        role = "committee";
      if(user.user.role === "admin")
        role = "admin";
    }
    

    const menuItem = [
          {
            path:"/dashboardStudent",
            name:"Home",
            icon:<FaHouseUser/>,
            roles: ['student'] 
        },
          {
            path:"/ApplicantRelease",
            name:"Wavier Form",
            icon:<FaFileSignature/>,
            roles: ['student'] 
        },
        {
          name:"Applicant Form",
          icon:<FaCaretDown/>,
          roles: ['student'],
          submenu: [
            {
              path:"/ApplicationForm",
              icon:<FaClipboardList/>,
              name:"Applicant Form",
              roles: ['student']
            },
            {
              path:"/clubExperience",
              icon:<FaBook/>,
              name:"Club Experience",
              roles: ['student']
            },
            {
              path:"/workExperience",
              icon:<FaBriefcase/>,
              name:"Work Experience",
              roles: ['student']
            },
            {
              path:"/fieldExperience",
              icon:<FaBriefcaseMedical/>,
              name:"Field Experience",
              roles: ['student']
            },
            {
              path:"/honorsExperience",
              icon:<FaGraduationCap/>,
              name:"Honors Experience",
              roles: ['student']
            },
            {
              path:"/labExperience",
              icon:<FaFlask/>,
              name:"Lab Experience",
              roles: ['student']
            },
            {
              path:"/volunteerExperience",
              icon:<FaGlobe/>,
              name:"Volunteer Experience",
              roles: ['student']
            }
          ]
        },
        {
            path:"/StatusPage",
            name:"Status",
            icon:<FaWpforms/>,
            roles: ['student'] 
        },
        
      
        {
          path:"/headshot",
          name:"Upload Headshot",
          icon:<FaIdCard/>,
          roles: ['student'] 
      },
      {
        path:"/transcript",
        name:"Upload Transcript",
        icon:<FaUserGraduate/>,
        roles: ['student'] 
    },
    {
      path:"/uploadpersonalstatement",
      name:"Personal Statement",
      icon:<FaRegEdit/>,
      roles: ['student'] 
  },
  {
    path:"/Calendar",
    name:"Schedule Availability",
    icon:<FaCalendarAlt/>,
    roles: ['student'] 
},

  
    
        
        {
            path: "/dashboardChair",
            name: "Home",
            icon: <FaHouseUser/>,
            roles: ['admin']
          },
          {
            path: "/manageApplications",
            name: "View Applications",
            icon: <FaClipboardList />,
            roles: ['admin']
          },
          {
            path:"/schedule",
            name:"Find Meetings",
            icon:<FaCalendarAlt />,
            roles: ['admin'] 
        },
          {
            path: "/AdminCalendar",
            name: "Schedule Availability",
            icon: <FaCalendarAlt />,
            roles: ['admin']
          },
          
          {
            path: "/EvaluationSelectUser",
            name: "Interview Evaluation",
            icon: <FaClipboardList />,
            roles: ['admin']
          },
          
          {
            path: "/dashboardCommittee",
            name: "Home",
            icon: <FaHouseUser />,
            roles: ['committee']
          },
          {
            path: "/manageApplications",
            name: "Review Applications",
            icon: <FaClipboardList />,
            roles: ['committee']
          },
          
          {
            path: "/CommitteeCalendar",
            name: "Scheduling Calendar",
            icon: <FaCalendarAlt />,
            roles: ['committee']
          },
          {
            path: "/EvaluationSelectUser",
            name: "Interview Evaluation",
            icon: <FaClipboardList />,
            roles: ['committee']
          },
          {
            path: "/FacultyLetter",
            name: "Letter Submission",
            icon: <FaUserAlt />,
            roles: ['faculty']
          },
          {
            path: "/FacultyAdvisoryForm",
            name: "Faculty Form",
            icon: <FaTh />,
            roles: ['faculty']
          },
          {
            path: "/#",
            name: "Pending Requets",
            icon: <FaCommentAlt />,
            roles: ['faculty']
          },
          {
            path:"/HomePage",
            name:"Home",
            icon:<FaHouseUser/>,
            roles: ['guest'] 
        },
          {
            path: "/register",
            name: "Apply Now",
            icon: <FaUserAlt />,
            roles: ['guest'] 
          },
    ];

    const filteredMenuItems = menuItem.filter(item => item.roles.includes(role));

    const [subMenuOpen, setSubMenuOpen] = useState(false);


    return (
      <div className='box'>
        <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
          <div className="top_section">
            <img src={logo} alt="logo" style={{ display: isOpen ? "block" : "none" }} className="logo"></img>
            <div style={{ marginLeft: isOpen ? "150px" : "0px" }} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {filteredMenuItems.map((item, index) => {
            if (item.submenu) {
              return (
                <div key={index} className="link_submenu" onClick={() => setSubMenuOpen(!subMenuOpen)}>
                  <div className="icon">{item.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                  <div className={`submenu_items ${subMenuOpen ? 'open' : 'closed'}`}>
                    {item.submenu.map((subitem, subindex) => (
                      <NavLink
                        to={subitem.path}
                        key={subindex}
                        className="link_submenu_item"
                        activeClassName="active"
                      >
                        <div className="icon1">{subitem.icon}</div>
                        <div className="link_text1">{subitem.name}</div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{item.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                </NavLink>
              );
            }
          })}
        </div>
        <main className="main"></main>
      </div>
    );
};


Sidebar.propTypes = {

  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Sidebar); 
