
import {Link, NavLink} from "react-router-dom"
const Navbar = () => {
  return (
      <nav>
        <ul>
           {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>  */}

          <li><NavLink  to="/" style={{ fontWeight: 'bold', color:'red'}} exact={true} >Home</NavLink></li>
          <li><NavLink to="/about" style={{ fontWeight: 'bold', color:'red'}} exact={true}>About</NavLink></li>
          <li><NavLink to="/contact" style={{ fontWeight: 'bold', color:'red'}} exact={true}>Contact</NavLink></li> 
          <li><NavLink to="/post/mobile" style={{ fontWeight: 'bold', color:'red'}} exact={true}>Post</NavLink></li> 
        </ul>
      </nav>
  )
}

export default Navbar
