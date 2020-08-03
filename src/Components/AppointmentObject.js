import React from 'react';
import AppointmentSlot from './AppointmentSlot.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons'

const removeIcon = <FontAwesomeIcon icon={faWindowClose} className="fa-lg pointer" />
const editIcon = <FontAwesomeIcon icon={faPencilAlt} className="fa-sm pointer" />

function AppointmentObject(props) {
    //takes in the event to render over props
    //destructures properties to properly assign title, bizName, etc
    const { id, business_name, address, event_date, appointment_slots} = props.activeEvent
    const { users, activeEvent, editEvent } = props

    const appointments_rendered = appointment_slots.map((appInfo, index) => {


        let val = (appInfo.client_id) ? +appInfo.client_id : null
        let client = null
        let displayVal = "available"
        let clientIndex = null
        if (Number(appInfo.client_id)) {
            clientIndex = users.findIndex(user => user.id === val);
            client = users[clientIndex]
            displayVal = client.name //client's name
        }
        let classes = (displayVal === "available")
            ? "event-available"
            : "event-booked"
        // classes = "app-slot " + classes

        return (
            <AppointmentSlot
                key={index + "EventAppSlot"}
                appSlotIndex = {index}
                client = {client}
                displayVal={displayVal}
                timeVal={appInfo.time}
                classes={classes}
                editEvent={editEvent}
                events={props.events}
                eventID ={id}
            // eventID = {index}
            // appSlotID = 
            />
        )
    })

    return (
        <div className="event-box" key={id}>
            <div className="tools">
                <div onClick={() => props.deleteEvent(activeEvent.id)} className="event-remove-event">
                    {removeIcon}
                </div>
                <div onClick={() => window.alert("edit event")} className="event-edit-event">
                    {editIcon}
                </div>
            </div>
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

export default AppointmentObject;
