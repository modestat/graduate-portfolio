import afterStudies from "../assets/projects/studyplatform/afterStudies.png";
import emptyProject from '../assets/projects/studyplatform/emptyProject.png';
import recruit from '../assets/projects/studyplatform/recruit.png';
import studyplatform from "../assets/studyplatform.png";
import something from "../assets/projects/somehting/something.png";
import upcoming from "../assets/projects/webtingenes/upcoming.png";

// images for twitter-remake project
import login from "../assets/projects/twitter/login.png";
import fastapi from "../assets/projects/twitter/fastapi.png";
import fastapi2 from "../assets/projects/twitter/fastapi2.png";
import homepage from "../assets/projects/twitter/homepage.png";
import post from "../assets/projects/twitter/post.png";
import profileSettings from "../assets/projects/twitter/profileSettings.png";
import settingsColor from "../assets/projects/twitter/settingsColor.png";
import signup from "../assets/projects/twitter/signup.png";
/********************************************* */

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
      mainImage: login,
    
     images: [
       {
         src: signup,
         alt: "Empty project state",
         caption: "Clean interface when starting a new project"
       },
       {
        src: login,
        alt: "Empty project state",
        caption: "Clean interface when starting a new project"
      },
      {
        src: homepage,
        alt: "Empty project state",
        caption: "Clean interface when starting a new project"
      },
      {
        src: post,
        alt: "Empty project state",
        caption: "Clean interface when starting a new project"
      },
      {
        src: profileSettings,
        alt: "Empty project state",
        caption: "Clean interface when starting a new project"
      },
      {
        src: settingsColor,
        alt: "Empty project state",
        caption: "Clean interface when starting a new project"
      },
      {
        src: fastapi,
        alt: "Empty project state",
        caption: "Clean interface when starting a new project"
      },
      {
        src: fastapi2,
        alt: "Empty project state",
        caption: "Clean interface when starting a new project"
      },
     ],
    technologies: "Python, React, FastAPI, PostgreSQL, Docker, Render",
    github: "https://github.com/yourusername/studyplatform",
    longDescription: "For this project, I with another student from same Bachelor program created a twitter clone. The main focus for this project was to learn FastAPI and how to work with REST APIs. I worked on both the frontend and backend, implementing user authentication, tweet creation, and profile management features. This project helped me understand web application architecture, API design, and database integration using PostgreSQL. I also gained experience with Docker for containerization and Render for deployment, load balancer and how caching works."
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
      title: "Upcomming",
      description: "A project that will be developed as part of course tingenes web, along with 3 interaction design students and 2 other developers from the same bachelor course",
      date: "fall 2025"
    }
  ];