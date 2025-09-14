import studyplatform from '../assets/studyplatform.png'
import { Link } from 'react-router-dom'
import './styles/ProjectCard.css';
const ProjectCard = (props) => {

  if (props.variant === 'stacked') { 
    return (
      <div className="stacked-project">
        <Link className="card-layer content-card" to={`/project/${props.slug}`}>
          <img src={studyplatform} alt="image showing dashbroad from project called studyplatform" />
          <h2>{props.title}</h2>
        </Link>
      </div>
    );
  }

  //else return this layout if the stylign is not specidied or something
  return (
    <Link className="project__item" to={`/project/${props.slug}`}>
          <img src={studyplatform} alt="image showing dashbroad from project called studyplatform" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>{props.date}</p>
          <button>{props.buttonText}</button>
    </Link>
  )
}

export default ProjectCard