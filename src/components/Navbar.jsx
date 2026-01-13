import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import './styles/Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <nav className="navbar">    
        <button 
          className="hamburger-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu" //ACCESSIBILITY
        >
          {isOpen ? (
            // X ikon
            <svg className="close-menu-btn" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // hamburger ikon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* fullscreen overlay - UTENFOR nav */}
      {isOpen && (
        <div className="fullscreen-menu">
          <ul className="navbar-links">
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
