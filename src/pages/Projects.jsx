import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import { projects } from '../data/projectsInfo';
import { useProjectDetail } from '../hooks/useProjectDetail';
import './styles/project.css';

const FILTERS = ['All', 'Fullstack', 'Frontend', 'Backend', 'UI / UX', 'AI'];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const {
    selectedProject,
    imageNumber,
    openProject,
    closeProject,
    nextImage,
    prevImage,
  } = useProjectDetail();

  const countFor = (filter) =>
    filter === 'All'
      ? projects.length
      : projects.filter((p) => p.categories?.includes(filter)).length;

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.categories?.includes(activeFilter));

  const currentIndex = visibleProjects.findIndex((p) => p.id === selectedProject?.id);
  const nextProject =
    visibleProjects.length > 1
      ? visibleProjects[(currentIndex + 1) % visibleProjects.length]
      : null;

  return (
    <div className="projects-container">
      <div className="projects__header">
        <div>
          <h2 className="projects__title">Work</h2>
          <p className="projects__subtitle">Click a project to open it.</p>
        </div>

        <div className="projects__filters">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter} <span className="filter-btn__count">{countFor(filter)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="projects__grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onProjectClick={openProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          nextProject={nextProject}
          imageNumber={imageNumber}
          onNextImage={nextImage}
          onPrevImage={prevImage}
          onClose={closeProject}
          onOpenProject={openProject}
        />
      )}
    </div>
  );
};

export default ProjectsPage;