import React from 'react';
import EventAppSlot from './EventAppSlot.js'
import EventObject from './EventObject.js';

function Event (props){
    const eventsMap = props.events.map( E => {
        console.log(E)
        return (
            <div className="event-box">
                <EventObject
                    activeEvent = {E}
                    users={props.users}
                >
    
                </EventObject>
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
