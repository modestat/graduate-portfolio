import './App.css';
import React, { lazy, Suspense } from 'react';
import Layout from './components/layouts/MainLayout';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ProjectsPage = lazy(() => import('./pages/Projects'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <section id="home"><HomePage /></section>
        <section id="projects"><ProjectsPage /></section>
        <section id="about"><AboutPage /></section>
      </Suspense>
    </Layout>
  );
}

export default App;