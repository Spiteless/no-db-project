import React from 'react';

function EventAppSlot(props) {
    const {displayVal, classes, timeVal} = props
    //classes is either "event-booked or event-availble"

    return (
        <div className={`event-timeslot-container ${classes}`}>
            <p className="event-timeslot">{timeVal}</p>
            <p className="app-slot">
                { displayVal }
            </p>
        <div className="event-remove-client">
            [X]
        </div>
        </div>
    )
}



export default EventAppSlot;
