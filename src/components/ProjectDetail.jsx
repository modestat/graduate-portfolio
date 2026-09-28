import { useState, useEffect, useRef } from 'react';
import ImageModal from './ImageModal';
import './styles/ProjectDetail.css';

const ProjectDetail = ({
  project,
  nextProject,
  imageNumber,
  onNextImage,
  onPrevImage,
  onClose,
  onOpenProject,
}) => {
  const [openImage, setOpenImage] = useState(null);
  const detailRef = useRef(null);

  const images = project.images || [];
  const currentImage = images[imageNumber];

  // Go back to the top when switching project
  useEffect(() => {
    detailRef.current?.scrollTo(0, 0);
    setOpenImage(null);
  }, [project.id]);

  // Close with the Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && !openImage) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, openImage]);

  return (
    <>
      <div
        ref={detailRef}
        className="project-detail"
        style={{
          '--accent': project.color || '#ffc94d',
          '--ink': project.textColor || '#1a1012',
        }}
      >
        {/* Top bar */}
        <div className="pd-topbar">
          <p className="pd-label">
            <span className="pd-dot"></span>
            {project.title}
          </p>
          <button className="pd-close" onClick={onClose}>Close</button>
        </div>

        {/* Title */}
        <h1 className="pd-title">{project.title}</h1>
        <p className="pd-tagline">{project.description}</p>

        {/* Info row */}
        <div className="pd-meta">
          <div>
            <p className="pd-meta__label">When</p>
            <p className="pd-meta__value">{project.when || project.date}</p>
          </div>
          <div>
            <p className="pd-meta__label">Type</p>
            <p className="pd-meta__value">{project.type}</p>
          </div>
          <div>
            <p className="pd-meta__label">Stack</p>
            <p className="pd-meta__value">{project.technologies}</p>
          </div>
        </div>

        {/* Carousel */}
        {currentImage && (
          <div className="pd-carousel">
            <button className="pd-hero" onClick={() => setOpenImage(currentImage)}>
              <img src={currentImage.src} alt={currentImage.alt} />
            </button>

            <div className="pd-carousel__controls">
              <p className="pd-carousel__caption">{currentImage.caption}</p>

              {images.length > 1 && (
                <div className="pd-carousel__nav">
                  <button className="pd-carousel__btn" onClick={onPrevImage} aria-label="Previous image">←</button>
                  <span className="pd-carousel__counter">{imageNumber + 1} / {images.length}</span>
                  <button className="pd-carousel__btn" onClick={onNextImage} aria-label="Next image">→</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Overview + What I did */}
        <div className="pd-columns">
          <section>
            <h2 className="pd-heading">Overview</h2>
            <p className="pd-text">{project.longDescription}</p>
          </section>

          {project.myRole?.length > 0 && (
            <section>
              <h2 className="pd-heading">What I did</h2>
              <ul className="pd-list">
                {project.myRole.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="pd-footer">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="pd-github">
              View code on GitHub
            </a>
          )}

          {nextProject && (
            <button className="pd-next" onClick={() => onOpenProject(nextProject)}>
              <span className="pd-next__label">Next project</span>
              <span className="pd-next__title">{nextProject.title}</span>
            </button>
          )}
        </div>
      </div>

      {openImage && (
        <ImageModal
          src={openImage.src}
          alt={openImage.alt}
          onClose={() => setOpenImage(null)}
        />
      )}
    </>
  );
};

export default ProjectDetail;