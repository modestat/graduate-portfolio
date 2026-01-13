import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} /> 

          { /*TODO: <Route path="*" element={<NotFound />} /> /* Catch-all for unmatched routes */}
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
