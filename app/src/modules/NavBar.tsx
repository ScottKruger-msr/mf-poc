import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
 return (
 <nav>
		<NavLink className='navlink' style={{ marginRight: 10 }} to="/">Home</NavLink>
		<NavLink className='navlink' style={{ marginRight: 10 }} to="/react">React App</NavLink>
		<NavLink className='navlink' style={{ marginRight: 10 }} to="/angular">Angular App</NavLink>
 </nav>
 );
};

export default NavBar;