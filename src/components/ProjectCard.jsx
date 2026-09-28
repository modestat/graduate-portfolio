const ProjectCard = ({ project, onProjectClick }) => {
  return (
    <button className="project-card" onClick={() => onProjectClick(project)}>
      <div className="project-card__image">
        <img src={project.image} alt={`Screenshot of ${project.title}`} />
      </div>
      <div
        className="project-card__bar"
        style={{ backgroundColor: project.color || '#e0314b' }}
      />
      <div className="project-card__heading">
        <h3 className="project-card__title">{project.title}</h3>
        <span className="project-card__year">{project.date}</span>
      </div>
      <p className="project-card__description">{project.description}</p>
    </button>
  );
};

export default ProjectCard;