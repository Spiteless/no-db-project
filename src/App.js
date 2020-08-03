import React from 'react';
import './reset.css';
import './App.css';

import axios from 'axios'
import Nav from './Components/Nav'
import Appointment from './Components/Appointment'

const { api } = require('./config.json')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      api: {
        base: '/api/',
        users: '/api/users/',
        events: '/api/events/'
      },
      events: [],
      users: [],
      newEvent_toggle: false,
    }
    this.toggleNewEvent = this.toggleNewEvent.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.getData = this.getData.bind(this)

  }
  

  componentDidMount() {
    this.getData()
  }

  toggleNewEvent() {
    let change = !this.state.newEvent_toggle
    this.setState( { newEvent_toggle: change})
  }

  getData = () => {
    axios.get(api.base)
      .then((res) => {
        this.setState({ events: res.data.events, users: res.data.users })
      }).catch(err => console.log(err))
  }

  deleteEvent = (id) => {
    axios.delete(api.events + id)
      .then((res) => {
        this.setState({ events: res.data })
      })
      .catch(err => console.log(err))
  }

  addEvent = (newEvent) => {
    axios.post(api.events, { newEvent })
      .then((res) => {
        this.setState({ events: res.data })
      })
      .catch(err => console.log(err))
  }

  editEvent = (id, updatedEventObj) => {
    console.log(id, updatedEventObj)
    axios.put(api.events + id, { updatedEventObj })
      .then((res) => {
        this.setState({ events: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteUser = (id) => {
    axios.delete(api.user + id)
      .then((res) => {
        this.setState({ users: res.data })
      })
      .catch(err => console.log(err))
  }

  addUser = (newUserObj) => {
    axios.post(api.user, { newUserObj })
      .then((res) => {
        this.setState({ users: res.data })
      })
      .catch(err => console.log(err))
  }

  editUser = (id, userToEdit) => {
    console.log(id, userToEdit)
    axios.put(api.user + id, { userToEdit })
      .then((res) => {
        this.setState({ users: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Nav
          key="Nav"
          toggleNewEvent = {this.toggleNewEvent}
          getData = {this.getData}
        />
        <main>
        <Appointment
          users={this.state.users}
          events={this.state.events}
          deleteEvent = {this.deleteEvent}
          editEvent = {this.editEvent}
          addEvent = {this.addEvent}
          deleteUser = {this.deleteUser}
          editUser = {this.editUser}
          addUser = {this.addUser}
          toggleNewEvent = {this.toggleNewEvent}
          newEvent_toggle = {this.state.newEvent_toggle}
        />
        </main>
      </div>
    );
  }
}

export default App;
