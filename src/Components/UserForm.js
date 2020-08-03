import React from 'react';

class UserForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
          id: "",
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
    //{client_id: 14, time: "10:30 am"}
    let newClientID = +this.state.id
    // let newArray = [...this.props.event.appointment_slots]
    let eventIndex = this.props.events.findIndex( el => el.id === this.props.eventId)
    let clonedObj = {...this.props.events[eventIndex]}
    clonedObj.appointment_slots[this.props.editUserNumber].client_id = +newClientID
    console.log(clonedObj)

      this.props.toggleEditUser()
      this.props.editUser(clonedObj.id, clonedObj)          
  }


  render() {
    // console.log("PROPS1231232398y3y492", this.props)
    console.log("this.state", this.state)

    return (
      <div className="FormNewEvent">
        <div className="row input-row">
            Client by ID: <input type="text" value={this.state.activeUser} name="id" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="row display-row">
          <div className="name">Name: Jane Doe</div>
        </div>
        <div className="row input-row">
          <button className="form-send-button" onClick={() => this.updateAppointmentInfo()}>Submit</button>
          <button className="form-cancel-button" onClick={this.props.toggleEditUser}>Cancel</button>
        </div>
      </div>
      )
  }
}
      
export default UserForm;