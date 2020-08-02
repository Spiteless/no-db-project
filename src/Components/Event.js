import React from 'react';


function Event (props){
    const eventsMap = props.events.map( E => {
        // const {id, business_name, address, event_date, appointment_slots} = E
        const appointments_rendered = E.appointment_slots.map( (app_val, index) => {
            // let this_user = [...props.users].filter( u => u.id === app_val)
            // this_user = this_user[0]
            // console.log("this_user", this_user)
            // let slotInfo = null
            // let userIndex = null
            // if (app_val) {
            //     console.log("app_val", app_val, "index", index)
            //     userIndex = props.users.findIndex( u => props.users.id === app_val)
            //     const user = props.users[userIndex]
            //     slotInfo = (userIndex) ? user.name : "available"
            // }
            let val = null
            let user = null
            val = (app_val) ? +app_val : null
            console.log(props.users[0], val, typeof val)
            if (val) { user = props.users[val].name }
            let classes = (user) ? "event-booked" : "event-available"
            classes = "app-slot " + classes
            return (
            <div className={"app-slot"}
            key={index + "map"}
            className={classes}>
                { (user) ? user : "available" }
            </div>
        )})
    return(
        <div className="event-box" key={E.id}>
            <div className="row event-info-line">
                <h2 className="event-name">{E.business_name}</h2>
                <h3 className="event-date">{E.event_date}</h3>
                <h3 className="event-address">{E.address}</h3>
            </div>
            <div className="row">
                {appointments_rendered}
            </div>
        </div>
    )}
    )
  return (  
    <div className="Event">
      <div className="event-container">{eventsMap}</div>
    </div>
  );
}

export default Event;
