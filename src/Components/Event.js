import React from 'react';
import EventObject from './EventObject.js';

function Event (props){
    const eventsMap = props.events.map( (E, eventIndex) => {
        return (
            <div className="event-box">
                <EventObject
                    activeEvent = {E}
                    eventIndex = {eventIndex}
                    users={props.users}
                    deleteEvent = {props.deleteEvent}
                    editEvent = {props.editEvent}
                />
            </div>
        )
    })

  return (  
    <div className="Event">
      <div className="event-container">{eventsMap}</div>
    </div>
  );
}

export default Event;
