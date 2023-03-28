import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaThList,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'
import '../../styles/Sidebar.css'

const Sidebar = ({ children, role }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path:"/StatusPage",
            name:"Status",
            icon:<FaTh/>,
            roles: ['student'] 
        },
        {
            path:"/applyNow",
            name:"Apply Now",
            icon:<FaUserAlt/>,
            roles: ['student'] 
        },
        {
            path:"/practiceInterview",
            name:"Practice Interview",
            icon:<FaCommentAlt/>,
            roles: ['student'] 
        },
        {
            path:"/ApplicationForm",
            name:"Applicant Form",
            icon:<FaThList/>,
            roles: ['student'] 
        },
        {
            path:"/ApplicantRelease",
            name:"Wavier Form",
            icon:<FaThList/>,
            roles: ['student'] 
        },
        {
            path: "/dashboardChair",
            name: "Home",
            icon: <FaTh/>,
            roles: ['admin']
          },
          {
            path: "/manageUsers",
            name: "Manage Users",
            icon: <FaUserAlt />,
            roles: ['admin']
          },
          {
            path: "/settings",
            name: "Settings",
            icon: <FaTh />,
            roles: ['admin']
          },
          {
            path: "/committePage",
            name: "Committe Page",
            icon: <FaTh />,
            roles: ['committe']
          },
          {
            path: "/reviewApplications",
            name: "Review Applications",
            icon: <FaCommentAlt />,
            roles: ['committe']
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
            path: "/applyNow",
            name: "Apply Now",
            icon: <FaUserAlt />,
            roles: ['guest'] 
          },
    ];

    const filteredMenuItems = menuItem.filter(item => item.roles.includes(role));

    return (
        <div className='box'>
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <img src={logo} alt="logo" style={{ display: isOpen ? "block" : "none" }} className="logo"></img>
                    <div style={{ marginLeft: isOpen ? "150px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    filteredMenuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main className="main">{children}</main>
        </div>
    );
};

export default Sidebar;
