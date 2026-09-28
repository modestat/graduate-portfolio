import Navbar from '../resuable/Navbar'; 
import Footer from '../resuable/Footer';
import '../styles/layout.css';



const Layout = ({children}) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
