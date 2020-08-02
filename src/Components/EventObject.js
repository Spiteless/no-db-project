import React from 'react';
import EventAppSlot from './EventAppSlot.js'

function EventObject(props) {
    //takes in the event to render over props
    //destructures properties to properly assign title, bizName, etc
    // console.log("EventObject", props)
    const {id, business_name, address, event_date, appointment_slots} = props.activeEvent
    const {users} = props.users

    const appointments_rendered = appointment_slots.map( (appInfo, index) => {

        /* 
        let displayVal = "available"
        if (Number(appInfo.clientId)) { 
            displayVal = props.users[val].name //client's name
        }
        */

        // let val = null
        // let clientName = null
        // val = (appInfo.client_id) ? +appInfo.client_id : null
        // if (val) { clientName = props.users[val].name }
        // let classes = (clientName) ? "event-booked" : "event-available"
        // let displayVal = (clientName) ? clientName : "available"
        // classes = "app-slot " + classes

        let val = (appInfo.client_id) ? +appInfo.client_id : null

        let displayVal = "available"
        if (Number(appInfo.client_id)) { 
            displayVal = props.users[val].name //client's name
        }
        let classes = (displayVal === "available")
            ? "event-available"
            : "event-booked"
        // classes = "app-slot " + classes

        return (
        <EventAppSlot
            key={index+"EventAppSlot"}
            index = {index}
            displayVal = {displayVal}
            timeVal = {appInfo.time}
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
