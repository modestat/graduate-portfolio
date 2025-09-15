import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
//import Myprojects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
         {/*} <Route path="/projects" element={<Myprojects />} /> */}
          <Route path="/project/:slug" element={<ProjectDetail />} />
          { /*<Route path="*" element={<NotFound />} /> /* Catch-all for unmatched routes */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
