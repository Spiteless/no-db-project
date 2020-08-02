import React from 'react';


function EventAppSlot(props) {
    const {displayVal, classes} = props

    return (
        <div
        className={classes}>
            { displayVal }
        </div>
    )
}


export default EventAppSlot;
