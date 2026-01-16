import Navbar from '../resuable/Navbar'; 
import Footer from '../resuable/Footer';
import {useLocation, Outlet} from 'react-router-dom';
import '../styles/layout.css';

// to handle conditional logic for the footer render
const ConditionalFooter = () => {
    const location = useLocation(); 
    const noFooterPaths = ['/'];    // which paths shoudl not shwo the footer
    const showFooter = !noFooterPaths.includes(location.pathname);   // then also check if the current path is in the noFooterPaths array
    return showFooter ? <Footer /> : null;  // only render footer is showFooter is true
  };

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <ConditionalFooter/>
    </div>
  );
};

export default Layout;
