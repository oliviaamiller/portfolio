import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <NavLink exact to ="/illustration">
        Illustration
      </NavLink>
      <NavLink exact to ="/surface-design">
        Surface Design
      </NavLink>
      <NavLink exact to ="/about">
        About
      </NavLink> <NavLink exact to ="/contact">
        Contact
      </NavLink>
      <NavLink exact to ="/dev">
        Development
      </NavLink>
    </div>
  )
}
