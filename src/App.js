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
        console.log(res)
        console.log(res.data)
        this.setState({events: res.data.events, users: res.data.users})
        // this.setState({
        //   users: res.data.users,
        //   events: res.data.events,
        // })
      }).catch(err => console.log(err))

      console.log("STATE from componentDidMount_________________________+")
      console.log(this.state)
  }


  render() {
    console.log("STATE from render()_________________________+")
      console.log(this.state)
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
