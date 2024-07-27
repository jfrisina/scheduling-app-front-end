import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<Link to='/auth'>Login</Link>
			<Link to='/schedule'>Schedule</Link>
			<Link to='/employees'>Employees</Link>
		</nav>
	);
};

/* EXPORT ------------------------------*/
export default Navbar;