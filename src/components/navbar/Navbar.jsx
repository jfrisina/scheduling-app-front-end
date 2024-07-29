import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<Link to='/home'>Home</Link>
			<Link to='/schedule'>Schedule</Link>
			<Link to='/employees'>Employees</Link>
			<Link to='/login'>Login</Link>
		</nav>
	);
};

/* EXPORT ------------------------------*/
export default Navbar;