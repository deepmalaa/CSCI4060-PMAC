import React, { useState, useEffect, useMemo, useRef } from 'react';
import { getCurrentProfile } from '../../actions/profile';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import { getUserData } from '../../actions/users';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllSchemas } from '../../actions/calendar';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Sidebar from './Sidebar';

import styles from '../../styles/MyCalendar.module.css';



const ScheduleAlg = ({ 

    getAllProfile, 
    profile: { profiles }, 
    getAllSchemas,
    getUserData

}) => {
    const [schemas, setSchemas] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const popoverRef = useRef();
    
    useEffect(() => {
      getAllProfile();
      getAllSchemas().then(data => setSchemas(data));
      getUserData().then(data => setUserInfo(data));
      
    }, []);


    
    
    

    useMemo(() => {
        const events = generateTimeSlot(schemas, userInfo);
         setEvents(events);
         setLoading(false);
      }, [schemas, userInfo]);


    // Function to find available slots for admin, at least three committee members, and all potential students that meet availability
    
    function generateTimeSlot(listSchemas, listUsers) {
        setEvents([]);
        

        // Stores scheduled events based on user type
        var student = [];
        var committee = [];
        var admin = [];
        //var events = [];
        // Stores data of time slot for meeting
        

        // Separates schedule events by user type
        for (let i = 0; i < listSchemas.length; i++) {
            
            for (let j = 0; j < listUsers.length; j++) {
                
                if (listUsers[j]._id === listSchemas[i].user) {
                
                    if (listUsers[j].type === "Student") {
                        student.push(listSchemas[i]);
                    }
                    if (listUsers[j].type === "Committee") {
                        committee.push(listSchemas[i]);
                    }
                    if (listUsers[j].type === "admin") {
                        admin.push(listSchemas[i]);
                    }
                }
                
            }
        }

        

        // Loop through all admin events (this saves time as it does not check days admin can not make)
        var events = [];
        for (let j = 0; j < admin.length; j++) {
            const eventStartTime = new Date(admin[j].start);
            const eventEndTime = new Date(admin[j].end);
            const timeSlotDuration = 90; // minutes
            var timeSlotStart = eventStartTime;
            console.log("TimeSlotStart: " + timeSlotStart.getTime())
            
            // Loops through all potential time slots of event
            
            while (timeSlotStart.getTime() + timeSlotDuration * 60000 <= eventEndTime.getTime()) {
                

                const timeSlotEnd = new Date(timeSlotStart.getTime() + timeSlotDuration * 60000); // convert minutes to milliseconds

                // Stores available members
                var availableCommittee = [];
                var availableStudents = [];
                
                // For all committee members events
                availableCommittee = [];
                for (let i = 0; i < committee.length; i++) {
                    
                    var comitStart = new Date(committee[i].start);
                    comitStart.setMonth(eventStartTime.getMonth());
                    comitStart.setDate(eventStartTime.getDate());
                    var comitEnd = new Date(committee[i].end);
                    comitEnd.setMonth(eventEndTime.getMonth());
                    comitEnd.setDate(eventEndTime.getDate());
                    //const comitStartTime = 
                    console.log("TEST: " + comitStart)
                    console.log("TEST2: " + timeSlotStart)



                    
                    // Checks if time slot fits committees availability
                    if(comitStart <= timeSlotStart && comitEnd >= timeSlotEnd) {
                        
                        availableCommittee.push(committee[i]);
                    }
                }
                
                // Only checks students if at least 3 committee members and the admin can attend
                
                if(availableCommittee.length >= 3) {
                    
                    // For all students schedules
                    
                    availableStudents = [];
                    for (let x = 0; x < student.length; x++) {
                        
                        
                        var studStart = new Date(student[x].start);
                        studStart.setMonth(eventStartTime.getMonth());
                        studStart.setDate(eventStartTime.getDate());
                        var studEnd = new Date(student[x].end);
                        studEnd.setMonth(eventEndTime.getMonth());
                        studEnd.setDate(eventEndTime.getDate());
                        console.log("Student: " + studStart)

                        // Checks if time slot fits student availability
                        if(studStart <= timeSlotStart && studEnd >= timeSlotEnd) {
                            availableStudents.push(student[x]); 
                        }
                        
                    }

                    if(availableStudents.length > 0) {

                        const dateT = {"title": "", "start": "", "end": "", "daysOfWeek": "", "startTime": "", "endTime":""};
                        // Need to match ids with names and send them via title
                        dateT.title = "A";
                        dateT.start = timeSlotStart;
                        dateT.end = timeSlotEnd;

                        // Fix annoying getMinutes returning 0 instead of 00...
                        if(timeSlotStart.getMinutes() == 0){
                          dateT.startTime = timeSlotStart.getHours() + ":00:00";
                        }
                        else {
                          dateT.startTime = timeSlotStart.getHours() + ":" + timeSlotStart.getMinutes() + ":00";
                        }
                       
                        if(timeSlotEnd.getMinutes() == 0){
                          dateT.endTime = timeSlotEnd.getHours() + ":00:00";
                        }
                        else {
                          dateT.endTime = timeSlotEnd.getHours() + ":" + timeSlotEnd.getMinutes() + ":00";
                        }

                        

                        dateT.daysOfWeek = [ timeSlotStart.getDay() ];

                       

                        //events.push([timeSlotStart, timeSlotEnd, availableCommittee, availableStudents]);
                        events.push(dateT);
                    }
                }
                
                
                
                timeSlotStart = new Date(timeSlotStart.getTime() + 30 * 60000); // increment by 30 minutes
            }
            
        }

        return events;
    }   
    
   console.log(events);
    
   return (
    <>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className={styles.myCalendarAdmin}>
            <h2 className={styles.instructionHeader}> Instructions</h2>
            <ul className={styles.instructionList}>
              <li>1. Fill out the times you are available at <u><a href="/AdminCalendar">schedule availability</a></u> to be interviewed on any given week. </li> 
              <li>2. Hover over an event to see the available committe members and students for that meeting time. </li>
              
            </ul>
            <div className={styles.cal1}>
              <Sidebar role="admin" />
                  <br/><br/><br/><br/><br/>
              <FullCalendar 
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    
                    left: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,prev,next'
                    
                  }}
                  //themeSystem= 'bootstrap'
                  height={1000}
                  initialView="dayGridMonth"
                  weekends={false}
                  events={events}
                  slotMinTime="08:00:00"
                  slotMaxTime="18:00:00"
                  eventLimit = {1}
                  
                  eventRender={(info) => {
                      const handleMouseEnter = () => {
                        info.el.innerHTML = `<div style="position:absolute;z-index:100;background:white;padding:5px;border:1px solid black">${info.event.title}</div>`;
                      };
                      const handleMouseLeave = () => {
                        info.el.innerHTML = info.event.title;
                      };
                      info.el.addEventListener("mouseenter", handleMouseEnter);
                      info.el.addEventListener("mouseleave", handleMouseLeave);
                    }}
                  
              />
          </div>
        </div>
        
      )}
    </>
  )
  

                    
  } 

    ScheduleAlg.propTypes = {
        profile: PropTypes.object.isRequired,
        getAllProfile: PropTypes.func.isRequired,
        getAllSchemas: PropTypes.func.isRequired,
        getUserData: PropTypes.func.isRequired
      };
      
      const mapStateToProps = (state) => ({
        profile: state.profile,
        auth: state.auth,
        
      });
      
      export default connect(mapStateToProps, { getAllProfile, getAllSchemas, getUserData})(
        ScheduleAlg
      );