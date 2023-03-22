import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import mongoose from 'mongoose';

// create a schema for the event
const eventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  daysOfWeek: [Number],
  startTime: String,
  endTime: String,
});

// create a model for the event
const Event = mongoose.model('Event', eventSchema);

// connect to the MongoDB database
//mongoose.connect('mongodb+srv://bhomid:fX5HerW8ghGLvncr@pmac.gxzhf9r.mongodb.net/myDatabase?retryWrites=true&w=majority', {
 // useNewUrlParser: true,
 // useUnifiedTopology: true,
//});




export default class DemoApp extends React.Component {

  state = {
   
    currentEvents: []
  }

  render() {
    return (
      <div className='demo-app'>
        {this.renderSidebar()}
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              
              left: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,prev,next'
              
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={false}
            slotMinTime="08:00:00"
            slotMaxTime="18:00:00"
          
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            
          </ul>
        </div>
      </div>
    )
  }

  

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
        let start = new Date(selectInfo.startStr) // create Date object from startStr
        let hoursAndMinutes = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        let finish = new Date(selectInfo.endStr) // create Date object from startStr
        let hoursAndMinutes2 = finish.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        let dayWeek = new Date(selectInfo.endStr) // create Date object from startStr
        //let thisDay = dayWeek.toLocaleTimeString([], {day: 'numeric'})
        let thisDay = dayWeek.getDay()
      calendarApi.addEvent({
        //id: createEventId(),
        groupId: 'test',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        daysOfWeek:  [ thisDay ],
        startTime: hoursAndMinutes,
        endTime: hoursAndMinutes2,
      })

      const event = new Event({
        groupId: 'test',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        daysOfWeek:  [ thisDay ],
        startTime: hoursAndMinutes,
        endTime: hoursAndMinutes2,
      })


      // save the event to the database
      event.save()
        .then(() => {
          console.log('Event saved successfully!');
        })
        .catch((err) => {
          console.error(err);
        });

      calendarApi.addEvent({
        groupId: 'test',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        daysOfWeek: [thisDay],
        startTime: hoursAndMinutes,
        endTime: hoursAndMinutes2,
      });


      
    }
  }

  

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

