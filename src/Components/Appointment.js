import React from 'react';
import AppointmentObject from './AppointmentObject.js';
import FormNewAppointment from './FormNewEvent.js'

/*
    users={this.state.users}
    events={this.state.events}
    deleteEvent = {this.deleteEvent}
    editEvent = {this.editEvent}
    addEvent = {this.editEvent}
    deleteUser = {this.deleteUser}
    editUser = {this.editUser}
    addUser = {this.addUser}
    toggleNewEvent = {this.toggleNewEvent}
    newEvent_toggle = {this.state.newEvent_toggle}
*/

function Appointment(props) {
    let {newEvent_toggle, toggleNewEvent, addEvent} = props
    

    const newEventForm = (
        <div className="event-box">
            <div className="event-container">
                <FormNewAppointment
                    toggleNewEvent={toggleNewEvent}
                    addEvent={addEvent}
                />
            </div>
        </div>
    )

    const eventsMap = props.events.map((E, eventIndex) => {
        return (
            <section className="event-box">
                <AppointmentObject
                    key={eventIndex+"EventObject"}
                    activeEvent={E}
                    eventIndex={eventIndex}
                    users={props.users}
                    events={props.events}
                    deleteEvent={props.deleteEvent}
                    editEvent={props.editEvent}
                />
            </section>
        )
    })

    return (
        <div className="Event">
            {(newEvent_toggle) ? newEventForm : null}
            <div className="event-container">{eventsMap}</div>
        </div>
    );
}

export default Appointment;
