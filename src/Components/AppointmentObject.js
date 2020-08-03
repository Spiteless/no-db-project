
import React from 'react';
import AppointmentSlot from './AppointmentSlot.js'
import AppointmentFormAlt from './AppointmentFormAlt.js'
import UserForm from './UserForm.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { render } from '@testing-library/react';

const removeIcon = <FontAwesomeIcon icon={faWindowClose} className="fa-lg pointer" />
const editIcon = <FontAwesomeIcon icon={faPencilAlt} className="fa-sm pointer" />

class AppointmentObject extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editAppointment: false,
            editUser: false,
            editUserNumber: null,
        }
        this.toggleEditAppointment = this.toggleEditAppointment.bind(this)    
        this.toggleEditUser = this.toggleEditUser.bind(this)    
        }

    toggleEditAppointment = () => {
        let change = !this.state.editAppointment
        this.setState({editAppointment: change})
        // window.alert(this.state.edit + "")
    }
    toggleEditUser = (appSlotNumber) => {
        let change = !this.state.editUser
        console.log("appslotnumber", appSlotNumber)
        this.setState({editUser: change, editUserNumber:appSlotNumber})
        // window.alert(this.state.editUserNumber)
    }

    render(){

    //takes in the event to render over props
    //destructures properties to properly assign title, bizName, etc
    const { id, business_name, address, event_date, appointment_slots} = this.props.activeEvent
    const { users, activeEvent, editEvent, editUser, events } = this.props
    

    const appointments_rendered = appointment_slots.map((appSlot, index) => {


        let client = null
        let displayVal = "available"
        let clientIndex = null
        if (Number(appSlot.client_id)) {
            clientIndex = users.findIndex(user => user.id === +appSlot.client_id);
            client = users[clientIndex]
            displayVal = client.name //client's name
        }
        let classes = (displayVal === "available")
            ? "event-available"
            : "event-booked"

        return (
            <AppointmentSlot
                key={index + "EventAppSlot"}
                index={index}
                appSlotIndex = {index}
                client = {client}
                displayVal={displayVal}
                timeVal={appSlot.time}
                classes={classes}
                editEvent={editEvent}
                events={this.props.events}
                eventID ={id}
                toggleEditUser={this.toggleEditUser}
            />
        )
    })
    
    const normalDisplay = (
        <div className="event-box" key={id}>
            <div className="tools">
                <div onClick={() => this.props.deleteEvent(activeEvent.id)} className="event-remove-event">
                    {removeIcon}
                </div>
                <div onClick={() => this.toggleEditAppointment()} className="event-edit-event">
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

    const editAppointmentDisplay = (
        <div className="event-box" key={id}>
            <AppointmentFormAlt
                toggleEditAppointment={this.toggleEditAppointment}
                on_click_func={()=>null}
                on_cancel_func={this.toggleEditAppointment}
                business_name={business_name}
                address={address}
                event_date={event_date}
                apponitment_slots={appointment_slots}
                editEvent={editEvent}
                id={id}
            />
        </div>
    )
        
    const editUserDisplay = (
        <div className="event-box" key={id}>
            <UserForm
                toggleEditUser={this.toggleEditUser}
                on_click_func={()=>null}
                on_cancel_func={this.toggleEditUser}
                business_name={business_name}
                address={address}
                event_date={event_date}
                apponitment_slots={appointment_slots}
                activeUser={appointment_slots.id}
                editUser={editEvent}
                eventId={id}
                users={users}
                events={events}
                editUserNumber={this.state.editUserNumber}
            />
        </div>
    )

    return (
        
        <div>{(this.state.editAppointment)
            ? editAppointmentDisplay 
            : (this.state.editUser) ? editUserDisplay
                                    : normalDisplay}</div>
    )
}
}
export default AppointmentObject;
