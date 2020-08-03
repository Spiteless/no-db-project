import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faWindowClose, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const addIcon = <FontAwesomeIcon icon={faPlusSquare} className="fa-lg pointer" />
const removeIcon = <FontAwesomeIcon icon={faWindowClose} className="fa-lg pointer" />
const editIcon = <FontAwesomeIcon icon={faPencilAlt} className="fa-sm pointer" />

const tools_editDelete = (
    <div className="tools">
        <button onClick={() => window.alert("remove")} className="event-remove-client">
            {removeIcon}
        </button>
        <button onClick={() => window.alert("edit")} className="event-edit-client">
            {editIcon}
        </button>
    </div>
)

const tools_add = (
    <div className="tools">
        <button onClick={() => window.alert("add")} className="event-add-client">
            {addIcon}
        </button>
    </div>
)


class AppointmentSlot extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tools_add: (
                <div className="tools">
                    <button onClick={() => window.alert("add")} className="event-add-client">
                        {addIcon}
                    </button>
                </div>
            ),
            tools_editDelete: (
                <div className="tools">
                    <button onClick={() => this.removeClientFromSlot(this.props.eventID, this.props.appSlotIndex)} className="event-remove-client">
                        {removeIcon}
                    </button>
                    <button onClick={() => window.alert("edit!!!!!!!")} className="event-edit-client">
                        {editIcon}
                    </button>
                </div>
            ),
        }
        this.removeClientFromSlot = this.removeClientFromSlot.bind(this)
    }

    removeClientFromSlot = (eventID, appSlotIndex) => {
        console.log("event id", eventID, "appslot", appSlotIndex)
        let oldEventObj = this.props.events.find((app) => app.id === eventID )
        let newEventObj = {...oldEventObj}
    
        newEventObj.appointment_slots.splice(appSlotIndex, 1, "available")
        
        this.props.editEvent(eventID, newEventObj)
        // editEvent = (id, eventToEdit) => {
            
    }
    
    
    render() {
        //classes is either "event-booked or event-availble"
        const { displayVal, classes, timeVal, userVal } = this.props
        const { tools_add, tools_editDelete } = this.state
        
        return (
        <div className={`event-timeslot-container ${classes}`}>
            <p className="event-timeslot">{timeVal}</p>
            <p className="app-slot">
                {displayVal} {userVal}
            </p>
            { (displayVal==="available") ? tools_add : tools_editDelete}
        </div>
        )
    }
}



export default AppointmentSlot;
