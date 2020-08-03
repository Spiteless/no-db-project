import React from 'react'

function NavLink(props){
    const {src, on_click, is_active, link} = props
    return (
      <li className={"nav-link " + ((is_active) ? "nav-active" : "nav-inactive")}>
        <a
          href={src}
          onClick={on_click}
  
        >{link}</a>
      </li>
    )
  }

export default NavLink