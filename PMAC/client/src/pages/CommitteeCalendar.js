import React, { useState, useEffect } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Sidebar from '../components/layout/Sidebar';

import css from '../styles/CommitteeCalendar.module.css';


import styled from "@emotion/styled";



import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../actions/profile';
import {setAlert} from '../actions/alert';

import { postSchedule, deleteSchema,getSchemas } from '../actions/calendar';
// create a schema for the event




class DemoApp extends React.Component {
 /*
  state = {  
    currentEvents: []
  }
 */
 
  constructor(props) {
    super(props);
    this.state = {
      currentEvents: [],
      initialEvents: null,
      load: true,
    };
  }
 


  async componentDidMount() {
    await this.props.getCurrentProfile();
    //var schemas = { events: [ await this.props.getSchemas() ]};
    var schemas = await this.props.getSchemas();

    //this.setState({ currentEvents: state });
    this.setState({ currentEvents: schemas,
                    load: false });
    
    //const events = await this.props.getSchemas();
    //this.setState({events: events });

    //console.log(this.state.events);
  
  }
  
  
  

  

  render() {
    

    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { currentEvents, schemas, load } = this.state;
    //this.state.currentEvents.length === 0
    if (load) { 
      // if currentEvents or schemas is not loaded, show a loading spinner or a message
      //console.log("Loading sir")
      return <div>Loading...</div>;
    }


    //var schemas = this.props.getSchemas();
    //const { schemas } = this.props.calendar;
    //{console.log(schemas)}
    //console.log(this.state.events);
    const INITIAL_EVENTS1 = [{"title":"SpaceShip","start":"2023-04-11T10:30:00-05:00","end":"2023-04-11T14:00:00-05:00","daysOfWeek":[2],"startTime":"10:30","endTime":"14:00","id":"973658861283"}]
    const INITIAL_EVENTS2 = this.state.currentEvents;
    
    
    //const newStr = INITIAL_EVENTS2.replace(/(\r\n|\n|\r)/gm, "");
    
    // This line right here
    //console.log(JSON.stringify("Start: First is static"));
    //console.log(JSON.stringify(INITIAL_EVENTS1));

    //console.log(JSON.stringify(this.state.currentEvents));

    //var initialEvents = JSON.stringify(this.state.currentEvents);
    //initialEvents = this.state.currentEvents;
  
    



    return (
      <div className='demo-app'>
        
        {this.renderSidebar()}
        <Sidebar role="committe" />
        <div className='demo-app-main'>
          <div className={css.cal}>
            <div className={css.cal1}>
                    <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        
                        left: 'title',
                        right: 'timeGridWeek,timeGridDay,prev,next'
                        
                    }}
                    initialView='timeGridWeek'

                    height={687}


                    //this.state.currentEvents
                    
                    initialEvents={this.state.currentEvents}
                    
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={false}
                    slotMinTime="08:00:00"
                    slotMaxTime="18:00:00"
                    views={{
                        dayGridWeek: {
                        timeFormat: 'HH:mm', // set timeFormat to 24-hour format
                        },
                        dayGridDay: {
                        timeFormat: 'HH:mm', // set timeFormat to 24-hour format
                        },
                    }}
                    
                    
                    select={this.handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={this.handleEventClick}
                    eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                    
                    // you can update a remote database when these fire:
                    //eventAdd={function(){}}
                    //eventChange={function(){}}
                    //eventRemove={function(){}}
                    
                    />
                </div>
            </div>
        </div>

        
        


      </div>
    )
  }

  renderSidebar() {
    const { profile } = this.props.profile;
    return (
      <div>
      <div className={css.allInstructions}>
        <div className={css.instructions}>
          
          <h2 className={css.instructionHeader}> Instructions</h2>
          <ul className={css.instructionList}>
            <li>1. Fill out the times you are available to be interviewed on any given week. </li> 
            <li>2. To select a time, click and drag your mouse until the desired time is reached. 
              Give your event a name then click 'OK'. </li>
            <li>3. If done correctly, you should now see your event. </li> 
            <li>4. If you'd like to edit your event, you can make the event longer or 
              shorter by moving your cursor to the bottom edge and dragging either up or down.</li>
            <li>5. If you'd like to delete an event, you can click it once and then confirm that you would like to delete the event.</li>
          </ul>
        </div>
      </div>
      
      </div>
    )
  }

  

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    let ranId = Math.floor(Math.random() * 1000000000000)
    calendarApi.unselect() // clear date selection

    if (title) {
        let start = new Date(selectInfo.startStr) // create Date object from startStr
        let hoursAndMinutes = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23'})
        let finish = new Date(selectInfo.endStr) // create Date object from startStr
        let hoursAndMinutes2 = finish.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23'})
        let dayWeek = new Date(selectInfo.endStr) // create Date object from startStr
        //let thisDay = dayWeek.toLocaleTimeString([], {day: 'numeric'})
        let thisDay = dayWeek.getDay()
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = daysOfWeek[start.getDay()];


      //console.log(dayOfWeek)
      calendarApi.addEvent({
        id: ranId,
        groupId: 'test',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        daysOfWeek:  [ thisDay ],
        startTime: hoursAndMinutes,
        endTime: hoursAndMinutes2,
      })
      
      const event = new Event({
        id: ranId,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        daysOfWeek:  [ thisDay ],
        startTime: hoursAndMinutes,
        endTime: hoursAndMinutes2,
      })

      
      const eventData = {
        id: ranId,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        daysOfWeek:  [ thisDay ],
        startTime: hoursAndMinutes,
        endTime: hoursAndMinutes2,
      }
      //console.log(eventData);
      this.props.postSchedule(eventData);
      
    }
    }

      

      
  

  

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

  handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
      //console.log(clickInfo.event.id);
      this.props.deleteSchema(clickInfo.event.id);
    }
  }


//top
}


// Not used
function handleEventAdd(info) {
  const newEvent = {
    id: info.event.id, // Generate unique ID for new event
    title: info.event.title,
    start: info.event.start,
    end: info.event.end,
    allDay: info.event.allDay
  };
  
  // Send new event data to server for storage
  // ...
}


function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>{this.props.myProp}</p>
      </div>
    );
  }
}




DemoApp.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  postSchedule: PropTypes.func.isRequired,
  deleteSchema: PropTypes.func.isRequired,
  getSchemas: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  schedule: state.schedule
});


export default connect(mapStateToProps, {setAlert, getCurrentProfile, postSchedule,deleteSchema,getSchemas})(DemoApp);