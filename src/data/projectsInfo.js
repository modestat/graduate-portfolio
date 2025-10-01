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

// images for studyplatform project
import dashboard from "../assets/projects/studyplatform/dashboard.png";
import dashboardSettings from "../assets/projects/studyplatform/dashboardSettings.png";
import createStudy from "../assets/projects/studyplatform/createStudy.png";
import createstudySettings from "../assets/projects/studyplatform/createstudySettings.png";
import exportdata from "../assets/projects/studyplatform/exportdata.png";
import recruitEmail from "../assets/projects/studyplatform/recruitEmail.png";
import recruitLink from "../assets/projects/studyplatform/recruitLink.png";
import surveyDemog from "../assets/projects/studyplatform/surveyDemog.png";
import takeSurvey from "../assets/projects/studyplatform/takeSurvey.png";
import userFlowDiagram from "../assets/projects/studyplatform/userFlowDiagram.png";
/********************************************* */

export const projects = [
  {
    id: 1,
    slug: "studyplatform",
    title: "StudyPlatform",
    description: "A platform for researchers to help create and conduct studies",
    date: "Spring 2025",
    buttonText: "View Code",
    mainImage: dashboard,
    
     // All images for the gallery
     images: [
       {
         src: dashboard,
         alt: "Dashboard showing multiple studies with status indicators",
        caption: "Central management hub displaying all studies with filtering by status, response counts, and quick access to edit, export, and recruitment tools"
       },
       {
        src: dashboardSettings,
        alt: "dashboard settings for created studies",
        caption: "dashboard settings for created studies"
      },
       {
         src: createStudy,
         alt: "Artifact upload interface with file selection",
        caption: "Researchers can upload multiple media types (images, video, audio, text) for use in study questions"
       },
       {
         src: createstudySettings,
          alt: "Question configuration panel showing rating types",
          caption: "Flexible question builder with 8 rating types including multiple choice, star rating, emoji, and label slider options"
       },
      {
        src: recruitLink,
         alt: "Study recruitment page with shareable URL",
         caption: "Generate public links for participant recruitment with publish/unpublish toggle for study control"
      },
      {
        src: recruitEmail,
        alt: "Email invitation form for participants",
        caption: "Batch email invitation system allowing researchers to invite participants with customizable message"
      },
      {
        src: takeSurvey,
        alt: "Participant survey view with emoji rating scale",
        caption: "Clean, focused interface presenting one question at a time with auto-save after each response"
      },
      {
        src: surveyDemog,
         alt: "Demographics information collection form",
        caption: "Demographics information collection form"
      },
      {
        src: exportdata,
        alt: "Data export interface with response preview",
        caption: "View participant responses with demographics and export data in CSV or JSON format for analysis"
      },
      {
        src: userFlowDiagram,
         alt: "System architecture and user flow diagram",
         caption: "Application architecture showing researcher and participant workflows from authentication through study completion"
      },
     ],
    technologies: "React, Node.js, Express, MongoDB, Docker, GitHub Actions",
    github: "https://github.com/sabria23/Idg2671-project",
    longDescription: "A web application for creating and managing research surveys, built as a team project with 3 other students. This course focused on agile development practices and working with a product owner. I developed the dashboard page, data export functionality, and participant recruitment features, working across both frontend (React) and backend (Node.js/Express with MongoDB). I also handled deployment setup using GitHub Actions and Docker for the backend service. This project taught me full-stack development, REST API design, team collaboration, and DevOps basics.",
  },
    {
      id: 2,
      slug: "twitter clone",
      title: "Twitter clone",
      description: "Twitter remake paltform with scalable backend architecture",
      date: "Spring 2025",
      buttonText: "View code",
      mainImage: login,
    
     images: [
       {
         src: signup,
         alt: "User registration interface",
         caption: "Account creation with form validation and error handling"
       },
       {
        src: login,
        alt: "User authentication page",
        caption: "Login system with JWT token-based authentication"
      },
      {
        src: homepage,
        alt: "Main feed showing tweets",
        caption: "Homepage displaying tweets with like functionality and user interactions"
      },
      {
        src: post,
        alt: "Tweet creation interface",
        caption: "Post creation form with submission"
      },
      {
        src: profileSettings,
        alt: "User profile management",
        caption: "Account settings allowing users to update profile information"
      },
      {
        src: settingsColor,
        alt: "Theme customization interface",
        caption: "Color scheme customization for personalized user experience"
      },
      {
        src: fastapi,
        alt: "FastAPI auto-generated documentation",
        caption: "Interactive API documentation showing available endpoints"
      },
      {
        src: fastapi2,
        alt: "FastAPI auto-generated documentation",
        caption: "Interactive API documentation showing available endpoints"
      },
     ],
    technologies: "Python, React, FastAPI, PostgreSQL, Docker, Nginx, Render",
    github: "https://github.com/viljaah/twitter-remake-2",
    overview: "A full-stack social media application built in two phases. Started with core features like posting, authentication, and user management. Later expanded with load balancing and caching to handle high traffic scenarios.",
    myRole: "I built user authentication and account management (register, login, search). Implemented Nginx load balancer with least-connections algorithm. Created multi-layer caching (API cache + DB cache) with Python. Added follow/unfollow system with follower counts and deployed to Render with separate microservices for frontend/backend"
    },

    {
      id: 3,
      slug: "somehting",
      title: "somehting",
      description: "",
      date: "",
      buttonText: "View code",
      mainImage: something,
    
     images: [
       {
        
         alt: "Empty project state",
         caption: "Clean interface when starting a new project"
       },
     ],
    technologies: "",
    github: "https://github.com/yourusername/studyplatform",
    longDescription: ""
    },
    {
      id: 4,
      slug: "upcoming",
      title: "Upcomming",
      description: "A project that will be developed as part of course tingenes web, along with 3 interaction design students and 2 other developers from the same bachelor course",
      date: "Fall 2025",
      buttonText: "Coming Soon",
      mainImage: null, 
      comingSoon: true, 
      comingSoonMessage: "Project starts Fall 2025"
    }
  ];