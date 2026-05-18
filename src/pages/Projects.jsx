import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail'; 
import ProjectsHeader from '../components/ProjectsHeader';
import { projects } from '../data/projectsInfo';
import { useProjectDetail } from '../hooks/useProjectDetail';
import './styles/project.css';

const ProjectsPage = () => {
  const { 
    selectedProject,
    imageNumber,      
    openProject,
    closeProject,
    nextImage,        
    prevImage         
  } = useProjectDetail();

  return (
    <div className="projects-container">
       <ProjectsHeader onBack={() => navigate('/')} /> 
      <div className="projects__display--box">
        {projects.map(project => (
          <ProjectCard 
            key={project.id}
            slug={project.slug}
            title={project.title}
            description={project.description}
            date={project.date}
            // NOT IN USE ANYMORE: IT WAS FOR "VIEW CODE" buttonText={project.buttonText}
            project={project}
            onProjectClick={openProject}
          />
        ))}
      </div>

      {selectedProject && (
         <>
         <div className="project-overlay" onClick={closeProject} />
         <ProjectDetail 
           project={selectedProject}
           imageNumber={imageNumber}
           onClose={closeProject}
           onNextImage={nextImage}
           onPrevImage={prevImage}
         />
       </>
      )}
    </div>
  );
}

export default ProjectsPage;