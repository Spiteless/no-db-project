import React from 'react';
import './reset.css';
import './App.css';

import axios from 'axios'
import Nav from './Components/Nav'
import Event from './Components/Event'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      api: { base:'/api/',
              users:'/api/users/',
              events:'/api/events/' },
      events: [],
      users: []
    }
  }
  componentDidMount(){
    this.initializeData()
  }

  initializeData = () => {
    const {api} = this.state
    axios.get(api.base)
      .then((res) => {
        this.setState({events: res.data.events, users: res.data.users})
      }).catch(err => console.log(err))
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
