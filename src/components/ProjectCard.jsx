import studyplatform from '../assets/studyplatform.png'
import './styles/ProjectCard.css';
const ProjectCard = (props) => {

  return (
    // div + onclick to open slide-out panel
    <div className="project__card" onClick={() => props.onProjectClick(props.project)}> 
          <img src={studyplatform} alt="image showing dashbroad from project called studyplatform" />
          <h2>{props.title}</h2>
          <button>{props.buttonText}</button>
    </div>
  )
}

export default ProjectCard