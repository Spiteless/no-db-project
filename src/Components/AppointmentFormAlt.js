import React from 'react';

class AppointmentFormAlt extends React.Component{
  constructor(props){
    super(props)
    this.state = {
          "business_name": "",
          "address": "",
          "event_date": "",
          // "appointment_slots": [
          //   {"client_id": "null","time": "10:00 am"},
          //   {"client_id": "null","time": "10:15 am"},
          //   {"client_id": "null","time": "10:30 am"},
          //   {"client_id": "null","time": "10:45 am"},
          // ],
          ...this.props
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value
    // console.log(change)
    this.setState(change)
    console.log(this.state)

  }

updateAppointmentInfo = () => {
    let updatedAppointment = {
      id: this.state.id,
      business_name: this.state.business_name,
      address: this.state.address,
      event_date: this.state.event_date,
      appointment_slots: this.state.appointment_slots,
    }

    console.log(updatedAppointment)
      this.props.toggleEdit()
      this.props.editEvent(this.state.id, updatedAppointment)          
  }


  render() {
    return (
      <div className="FormNewEvent">
        <div className="row input-row">
            Business Name: <input type="text" value={this.state.business_name} name="business_name" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row input-row">
            Business Address: <input type="text" value={this.state.address} name="address" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row input-row">
            Event Date: <input type="text" value={this.state.event_date} name="event_date" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row input-row">
          <button className="form-send-button" onClick={() => this.updateAppointmentInfo()}>Submit</button>
          <button className="form-cancel-button" onClick={this.props.on_cancel_func}>Cancel</button>
        </div>
      </div>
      )
  }
}
      
export default AppointmentFormAlt;