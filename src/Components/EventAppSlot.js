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

function EventAppSlot(props) {
    const { displayVal, classes, timeVal, userVal } = props
    //classes is either "event-booked or event-availble"



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



export default EventAppSlot;
