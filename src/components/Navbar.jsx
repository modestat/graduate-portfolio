import {NavLink} from 'react-router-dom';
import './styles/Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="navbar-brand">
            M. Trakselyte
          </div>
          <ul className="navbar-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
      );
};

export default Navbar;