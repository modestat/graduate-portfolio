import './styles/home.css';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsInfo';


const HomePage = () => {
  return (
    <div className="outer__parent--box">
      <section className="hero-section">
        <h1>Modesta Trakselyte</h1>
        <p>Fullstack web developer</p>
      </section>
     
      <div className="projects__display--box">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} //accesing these props from the project array
            slug={project.slug}
            title={project.title}
            description={project.description}
            date={project.date}
            buttonText={project.buttonText}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage