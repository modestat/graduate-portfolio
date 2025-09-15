import './styles/home.css';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsInfo';
import {useState} from 'react';
/**
 * 
 * TODO: this slider is just a click but i need for it to slide (with mouse in dektop) and touch for mobile devices
 */
const HomePage = () => {

  // If showWork is false: show landing with slider
  // If showWork is true: show projects
  const [showWork, setShowWork] = useState(false); //initial state: work is not being shown yet because logic is false
  const [selectedProject, setSelectedProject] = useState(null); //initial state: no project is selected

  const toggleSlider = () => {
    setShowWork(!showWork); //basically the the onclick event is triggered it calles the toggelSLider funciton and since the initialze value of the showing part is false it shows the hero seciton, but since inside the funciton we have spezidied that it need to not be false aka true when the funciton is triggered it shows the content of the projects
    //maybe redirect to the work page? 
  }
 // this funciton saves which project was saved
  const openProjectDetail = (project) => { // arrow funciton that takes different projects as arguments and waits until user lcikcs on it, once clicked it will show the 2/3 view width informaiton about that specific project
    setSelectedProject(project);
  }
  return (
    <div className="outer__parent--box">
      {!showWork && ( // Show hero when showWork is FALSE
      <>
      <section className="hero-section">
        <h1>Modesta Trakselyte</h1>
        <p>Fullstack web developer</p>
        <p>Slide to the right to view my work or get to know me better through about page!</p>
      </section>

       <div className='ipad-slider'>
        <div className={`inside__slider-circle ${showWork ? 'moved' : ''}`} onClick={toggleSlider}></div>
          <p>Projects</p>
      </div>
      </>
     )}

     
     {showWork && ( //Show projects when TRUE
     <>
      <button onClick={toggleSlider} className="back-button">← Back</button>
      <div className="projects__display--box">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} //accesing these props from the project array
            slug={project.slug}
            title={project.title}
            description={project.description}
            date={project.date}
            buttonText={project.buttonText}
            onProjectClick={openProjectDetail} //the prop "onPorjectClick" that comes from the child; You're giving each ProjectCard access to your openProjectDetail function by calling it onProjectClick
          />
        ))}
      </div>
      {/* Conditionally render the selected project details if a project is selected  -> to know which orojetc is selected the funciton called openPorjectDetail stores that information*/}
      {selectedProject && (
        <div className="project-detail--out">
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <p>Date: {selectedProject.date}</p>
          <button className="close-project-detail" onClick={() => setSelectedProject(null)}>Close</button> 
        </div>
      )}
      </>
     )}

    </div>
  )
        }

export default HomePage