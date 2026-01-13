const ProjectDetail = ({ project, imageNumber, onClose, onNextImage, onPrevImage  }) => {
  
  return (
    <div className="project-detail--out">
      <button 
        className="close-project-detail" 
        onClick={onClose}
      >
        X
      </button>
      
      <h2>{project.title}</h2>
      <p className="project-date">{project.date}</p>

      {project.technologies && (
        <p className="project-technologies">
          <strong>Technologies:</strong> {project.technologies}
        </p>
      )}

      {project.github && (
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub 
        </a>
      )}

      {project.longDescription && (
        <p className="project-long-description">{project.longDescription}</p>
      )}

      {project.images && project.images.length > 0 && (
        <div className="project-images--gallery">
          <div className="project-image-item">
            <div className='carousel-buttons'>
              <button onClick={onPrevImage}>&lt;</button>
              <button onClick={onNextImage}>&gt;</button>
            </div>
            <img 
              src={project.images[imageNumber].src} 
              alt={project.images[imageNumber].alt} 
            />
            <p className="caption">{project.images[imageNumber].caption}</p>
            <p className="image-counter">
              {imageNumber + 1} / {project.images.length}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectDetail;