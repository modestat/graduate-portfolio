import afterStudies from "../assets/projects/studyplatform/afterStudies.png";
import emptyProject from '../assets/projects/studyplatform/emptyProject.png';
import recruit from '../assets/projects/studyplatform/recruit.png';
import studyplatform from "../assets/studyplatform.png";
import placeholder from "../assets/projects/twitter/placeholder.png";
import something from "../assets/projects/somehting/something.png";
import upcoming from "../assets/projects/webtingenes/upcoming.png";


export const projects = [
  {
    id: 1,
    slug: "studyplatform",
    title: "StudyPlatform",
    description: "A platform for researchers to help create and conduct studies",
    date: "Spring 2025",
    buttonText: "View Code",
    mainImage: studyplatform,
    
     // All images for the gallery
     images: [
       {
         src: emptyProject,
         alt: "Empty project state",
         caption: "Clean interface when starting a new project"
       },
       {
         src: recruit,
         alt: "Participant recruitment",
         caption: "Tool for recruiting study participants"
       },
       {
         src: afterStudies,
         alt: "Post-study analysis",
         caption: "Analysis view after completing studies"
       },
     ],
    technologies: "React, Node.js, Express, MongoDB, Docker, GitHub Actions",
    github: "https://github.com/yourusername/studyplatform",
    longDescription: "A web application for creating and managing research surveys, built as a team project with 3 other students. This course focused on agile development practices and working with a product owner. I developed the dashboard page, data export functionality, and participant recruitment features, working across both frontend (React) and backend (Node.js/Express with MongoDB). I also handled deployment setup using GitHub Actions and Docker for the backend service. This project taught me full-stack development, REST API design, team collaboration, and DevOps basics.",
  },
    {
      id: 2,
      slug: "twitter clone",
      title: "twitter clone",
      description: "twitter clone",
      date: "spring 2025",
      buttonText: "View code",
      mainImage: placeholder,
    
     images: [
       {
         src: emptyProject,
         alt: "Empty project state",
         caption: "Clean interface when starting a new project"
       },
     ],
    technologies: "Python, React, FastAPI, PostgreSQL, Docker, Render",
    github: "https://github.com/yourusername/studyplatform",
    longDescription: "A web application for creating and managing"
    },
    {
      id: 3,
      slug: "somehting",
      title: "somehting",
      description: "twitter clone",
      date: "spring 2025",
      buttonText: "View code",
      mainImage: something,
    
     images: [
       {
         src: emptyProject,
         alt: "Empty project state",
         caption: "Clean interface when starting a new project"
       },
     ],
    technologies: "Python, React, FastAPI, PostgreSQL, Docker, Render",
    github: "https://github.com/yourusername/studyplatform",
    longDescription: "A web application for creating and managing"
    },
    {
      id: 4,
      slug: "upcoming",
      title: "upcomming",
      description: "twitter clone",
      date: "fall 2025",
      buttonText: "View code",
      mainImage: upcoming,
    
     images: [
       {
         src: emptyProject,
         alt: "Empty project state",
         caption: "Clean interface when starting a new project"
       },
     ],
    technologies: "",
    github: "https://github.com/yourusername/studyplatform",
    longDescription: "An upcoming project in course tingenes web"
    }
  ];