import React from 'react';

const emptyAppointment = {
  "appointment_slots": [
                  {
                      "client_id": 2,
                      "time": "10:00 am"
                  },
                  {
                      "client_id": 1,
                      "time": "10:15 am"
                  },
                  {
                      "client_id": 1,
                      "time": "10:30 am"
                  },
                  {
                      "client_id": 1,
                      "time": "10:45 am"
                  }
                ]
}

class FormNewEvent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
          "business_name": "",
          "address": "",
          "event_date": "",
          "appointment_slots": [
            {"client_id": "null","time": "10:00 am"},
            {"client_id": "null","time": "10:15 am"},
            {"client_id": "null","time": "10:30 am"},
            {"client_id": "null","time": "10:45 am"},
          ],
    }
  }

  handleChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value
    console.log(change)
    this.setState(change)

  }

  createEvent = () => {
    let newEvent = {
        business_name: this.state.business_name,
        address: this.state.address,
        event_date: this.state.event_date,
        appointment_slots: this.state.appointment_slots,
    }

    console.log(this.props)
    console.log(newEvent)
    this.props.addEvent(newEvent)
    this.props.toggleNewEvent()
  }


  render() {
    return (
      <div className="FormNewEvent">
        <div className="row input-row">
            Business Name: <input type="text" name="business_name" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row input-row">
            Business Address: <input type="text" name="address" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row input-row">
            Event Date: <input type="text" name="event_date" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row input-row">
          <button className="form-send-button" onClick={() => this.createEvent()}>Create Event</button>
          <button className="form-cancel-button" onClick={this.props.toggleNewEvent} >Cancel</button>
        </div>
      </div>
      )
  }
}
      

// {
//   "newEvent": {

//           "id": 1,
//           "business_name": "Bloopville",
//           "address": "5 Lien Plaza",
//           "event_date": "8/5/2020",
//           "appointment_slots": [
//               {
//                   "client_id": 2,
//                   "time": "10:00 am"
//               },
//               {
//                   "client_id": 1,
//                   "time": "10:15 am"
//               },
//               {
//                   "client_id": 1,
//                   "time": "10:30 am"
//               },
//               {
//                   "client_id": 1,
//                   "time": "10:45 am"
//               }
//           ]
//       }
//   }
export default FormNewEvent;