import React from 'react';
import './reset.css';
import './App.css';

import axios from 'axios'
import Nav from './Components/Nav'
import Event from './Components/Event'

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
      users: []
    }
  }

  componentDidMount() {
    this.initializeData()
  }

  initializeData = () => {
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

  addEvent = (newEventObj) => {
    axios.post(api.events, { newEventObj })
      .then((res) => {
        this.setState({ events: res.data })
      })
      .catch(err => console.log(err))
  }

  editEvent = (id, eventToEdit) => {
    axios.put(api.events + id, { eventToEdit })
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
    axios.put(api.user + id, { userToEdit })
      .then((res) => {
        this.setState({ users: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Event
          users={this.state.users}
          events={this.state.events}
        ></Event>
      </div>
    );
  }
}

export default App;
