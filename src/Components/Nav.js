import React from 'react';

const linkObjects = [
    { link: "View Events", src: "#", active: true},
    { link: "New Event", src: "#", active: false},
]

class Nav extends React.Component{
  constructor(){
    super()
    this.state = {
    //   users: [],
    //   appointments: [],
    
    }
  }
  componentDidMount(){

  }
  render() {
    const linksMapped = linkObjects.map( l => {
        let classes = "nav-link"
        if (l.active) { classes += " nav-active" }
        return (
            <li
            className={classes}><a href={l.src}>{l.link}</a></li>
        )})
      
    return (  
    <nav className="Nav">
     <ul className="nav-container">
         {linksMapped}
     </ul>
    </nav>
  );
  }
}

export default Nav;