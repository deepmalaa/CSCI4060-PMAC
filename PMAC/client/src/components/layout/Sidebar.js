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

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/StatusPage",
            name:"Status",
            icon:<FaTh/>
        },
        {
            path:"/applyNow",
            name:"Apply Now",
            icon:<FaUserAlt/>
        },
        {
            path:"/practiceInterview",
            name:"Practice Interview",
            icon:<FaCommentAlt/>
        },
        {
            path:"/ApplicationForm",
            name:"Applicant Form",
            icon:<FaThList/>
        },
        {
            path:"/ApplicantRelease",
            name:"Wavier Form",
            icon:<FaThList/>
        }
    ]
    return (
        
            <div className='box'>
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                    
                   <img src = {logo} alt ="logo" style={{display: isOpen ? "block" : "none"}} className="logo"></img>
                   <div style={{marginLeft: isOpen ? "150px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               </div>
               <main>{children}</main>
           </div>
        
    );
};

export default Sidebar;