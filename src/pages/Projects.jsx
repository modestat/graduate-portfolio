import './styles/project.css';
import { projects } from '../data/projectsInfo';
import ProjectCard from '../components/ProjectCard';
const Myprojects = () => {
  return (
    <div className="outer__parent--box">
        <h1>Projects</h1>
        <div className="project__display--box">
           {projects.map(project => (
            <ProjectCard
            key={project.id}
            slug={project.slug}
            title={project.title}
            description={project.description}
            date={project.date}
            buttonText={project.buttonText}
            variant="stacked"
            />
           ))}
      </div>
    </div>
  )
}

export default Myprojects