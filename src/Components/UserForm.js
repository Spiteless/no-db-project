import React from 'react';

class UserForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
          id: "",
          // "name": "",
          // "address": "",
          // "event_date": "",
          // "appointment_slots": [
          //   {"client_id": "null","time": "10:00 am"},
          //   {"client_id": "null","time": "10:15 am"},
          //   {"client_id": "null","time": "10:30 am"},
          //   {"client_id": "null","time": "10:45 am"},
          // ],
          ...this.props
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateAppointmentInfo = this.updateAppointmentInfo.bind(this)
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
      name: this.state.name,
    }

    console.log(updatedAppointment)
      this.props.toggleEditUser()
      this.props.editUser(this.state.id, updatedAppointment)          
  }


  render() {
    return (
      <div className="FormNewEvent">
        <div className="row input-row">
            Client by ID: <input type="text" value={this.state.activeUser} name="id" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row input-row">
          <button className="form-send-button" onClick={() => this.updateAppointmentInfo()}>Submit</button>
          <button className="form-cancel-button" onClick={this.props.toggleEditUser}>Cancel</button>
        </div>
        <div className="row">
          <p className="">{this.props.index}</p>
          <p className=""></p>
          {/* {JSON.stringify(this.props)} */}
        </div>
      </div>
      )
  }
}
      
export default UserForm;