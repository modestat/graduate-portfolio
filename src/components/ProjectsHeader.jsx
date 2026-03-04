import './styles/ProjectHeader.css';
import { useNavigate } from 'react-router-dom';

const ProjectsHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* SVG uavhengig av header-div, dekker hele toppen */}
      <svg className="projects-header__svg" viewBox="0 0 400 60" preserveAspectRatio="none">
        <line x1="0" y1="58" x2="320" y2="58" stroke="#8B1A1A" strokeWidth="2"/>
        <line x1="320" y1="58" x2="400" y2="0" stroke="#8B1A1A" strokeWidth="2"/>
      </svg>

      <div className="projects-header">
        <h1 className="projects-header__title">
          <span className="projects-header__number"> / </span>PROJECTS
        </h1>
      </div>

      <button className="projects-header__back" onClick={() => navigate('/')}>
          Back
        </button>
    </>
  );
};

export default ProjectsHeader;