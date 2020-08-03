import React from 'react';

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        linkObjects: [
            { link: "View Events", src: "#", active: true, on_click: this.props.getData},
            { link: "New Event", src: "#", active: false, on_click: this.props.toggleNewEvent},
        ]
    
    }
  }
  componentDidMount(){

  }


  render() {
    const linksMapped = this.state.linkObjects.map( l => {
        let classes = "nav-link"
        if (l.active) { classes += " nav-active" }
        return (
            <li
            className={classes}><a href={l.src} onClick={l.on_click}>{l.link}</a></li>
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