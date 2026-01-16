import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import React, {lazy, Suspense} from 'react'; //impelmentd lazy loading for the pages that needed that
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ProjectsPage = lazy(() => import('./pages/Projects'));

import Layout from './components/layouts/MainLayout';
import NotFound from './pages/NotFound';

//TODO: need error handling component for lazy laoding, if the network request for a lazy component fails, i need to handle the error using feks error boundary 



function App() {
  return (
    <>
      <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} /> 
               </Route>
              <Route path="*" element={<NotFound />} /> 
            </Routes>
          </Suspense>
      </HashRouter>
    </>
  )
}

export default App
