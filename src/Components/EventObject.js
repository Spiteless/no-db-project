import React from 'react';
import EventAppSlot from './EventAppSlot.js'

function EventObject(props) {
    //takes in the event to render over props
    //destructures properties to properly assign title, bizName, etc
    // console.log("EventObject", props)
    const {id, business_name, address, event_date, appointment_slots} = props.activeEvent
    const {users} = props.users

    const appointments_rendered = appointment_slots.map( (app_val, index) => {
        let val = null
        let clientName = null
        val = (app_val) ? +app_val : null
        if (val) { clientName = props.users[val].name }
        let classes = (clientName) ? "event-booked" : "event-available"
        let displayVal = (clientName) ? clientName : "available"
        classes = "app-slot " + classes

        return (
        <EventAppSlot
            key={index+"EventAppSlot"}
            app_val = {+app_val}
            index = {index}
            displayVal = {displayVal}
            classes = {classes}
            
        > 
        </EventAppSlot>
    )})

    return (
        <div className="event-box" key={id}>
            <div className="row event-info-line">
                <h2 className="event-name">{business_name}</h2>
                <h3 className="event-date">{event_date}</h3>
                <h3 className="event-address">{address}</h3>
            </div>
            <div className="row event-appointment-row">
                {appointments_rendered}

            </div>
        </div>
    )
}

export default EventObject;
