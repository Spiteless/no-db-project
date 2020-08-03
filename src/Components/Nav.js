import React from 'react';
import NavLink from './NavLink.js'

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        linkObjects: [
            { link: "View Events", src: "#", is_active: true, on_click: this.props.getData},
            { link: "New Event", src: "#", is_active: false, on_click: this.props.toggleNewEvent},
        ]
    
    }
  }

  render() {
    const linksMapped = this.state.linkObjects.map( l => {
      return (
      <NavLink
        src={l.src}
        on_click={l.on_click}
        is_active={l.is_active}
        link={l.link}
        />
      )
        })

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