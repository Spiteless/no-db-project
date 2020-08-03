import React from 'react';

class AppointmentFormAlt extends React.Component{
  constructor(props){
    super(props)
    this.state = {
          "business_name": "",
          "address": "",
          "event_date": "",
          ...this.props
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value
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
      this.props.toggleEditAppointment()
      this.props.editEvent(this.state.id, updatedAppointment)          
  }


  render() {
    return (
      <div className="FormNewEvent">
        <div className="row input-row">
          <h3>Business Name:</h3><input type="text" value={this.state.business_name} name="business_name" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row input-row">
            <h3>Business Address:</h3><input type="text" value={this.state.address} name="address" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row input-row">
            <h3>Event Date:</h3><input type="text" value={this.state.event_date} name="event_date" onChange={(e) => this.handleChange(e)}/>
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