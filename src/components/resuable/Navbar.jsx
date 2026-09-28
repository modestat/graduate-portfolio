import '../styles/Navbar.css'; 

const Navbar = () => {
  
  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo">Modesta</a>
        <ul className='nav-links'>
         <li> <a href="#projects">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
