import './App.css';
import {HashRouter, Routes, Route, useLocation} from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';


// to handle conditional logic for the footer render
const ConditionalFooter = () => {
  const location = useLocation(); 
  const noFooterPaths = ['/'];    // which paths shoudl not shwo the footer
  const showFooter = !noFooterPaths.includes(location.pathname);   // then also check if the current path is in the noFooterPaths array
  return showFooter ? <Footer /> : null;  // only render footer is showFooter is true
};

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <ConditionalFooter />
      </HashRouter>
    </>
  )
}

export default App
