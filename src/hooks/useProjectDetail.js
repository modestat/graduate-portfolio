import { useState } from 'react';

export const useProjectDetail = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageNumber, setImageNumber] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setImageNumber(0);
    document.body.classList.add('no-scroll');
  }

  const closeProject = () => {
    setSelectedProject(null);
    setImageNumber(0);
    document.body.classList.remove('no-scroll');
  }

  const nextImage = () => {
    if (imageNumber < selectedProject.images.length - 1) {
      setImageNumber(imageNumber + 1);
    }
  }

  const prevImage = () => {
    if (imageNumber > 0) {
      setImageNumber(imageNumber - 1);
    }
  }

  return {
    selectedProject,
    imageNumber,
    openProject,
    closeProject,
    nextImage,
    prevImage
  };
}