import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export const MyCalendar = () => {


  return (
    <div>
      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar = {{
          start: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'title',   
          end: 'today prev,next'
        }}
      />
    </div>
  );
};


export default MyCalendar;