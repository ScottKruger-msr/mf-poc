import "./NavBar.css";
import Button from 'react-bootstrap/Button';

const NavBar = () => {
 return (
 <div className='navBar'>
		<Button className='navlink' href="/">Home</Button>
		<Button className='navlink' href="/react">React App</Button>
		<Button className='navlink' href="/angular">Angular App</Button>
 </div>
 );
};

export default NavBar;