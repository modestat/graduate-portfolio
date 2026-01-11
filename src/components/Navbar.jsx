import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import './styles/Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <nav className="navbar">    
        <button 
          className="hamburger-btn" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* fullscreen overlay - UTENFOR nav */}
      {isOpen && (
        <div className="fullscreen-menu">
          <ul className="navbar-links">
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
