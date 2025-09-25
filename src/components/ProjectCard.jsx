
import './styles/ProjectCard.css';
const ProjectCard = (props) => {

  return (
    // div + onclick to open slide-out panel
    <div className="project__card" onClick={() => props.onProjectClick(props.project)}> 
    {/*Shows whatever image is stored in props.project.mainImage in data.js*/}
          <img src={props.project.mainImage} alt={`screenshot of` } />
          <h2>{props.title}</h2>
          <button>{props.buttonText}</button>
    </div>
  )
}

export default ProjectCard