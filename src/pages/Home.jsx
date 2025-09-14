import './styles/home.css';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsInfo';
import {useState} from 'react';


const HomePage = () => {

  // If showWork is false: show landing with slider
  // If showWork is true: show projects
  const [showWork, setShowWork] = useState(false); //initial state: work is not being shown yet because logic is false

  const toggleSlider = () => {
    setShowWork(!showWork); //basically the the onclick event is triggered it calles the toggelSLider funciton and since the initialze value of the showing part is false it shows the hero seciton, but since inside the funciton we have spezidied that it need to not be false aka true when the funciton is triggered it shows the content of the projects
    //maybe redirect to the work page? 
  }
  return (
    <div className="outer__parent--box">
      {!showWork && ( // Show hero when showWork is FALSE
      <section className="hero-section">
        <h1>Modesta Trakselyte</h1>
        <p>Fullstack web developer</p>
        <p>Slide to the right to view my work or get to know me better through about page!</p>
      </section>
     )}

      <div className='ipad-slider'>
        <div className={`inside__slider-circle ${showWork ? 'moved' : ''}`} onClick={toggleSlider}></div>
          
      </div>
     
     {showWork && ( //Show projects when TRUE
      <div className="projects__display--box">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} //accesing these props from the project array
            slug={project.slug}
            title={project.title}
            description={project.description}
            date={project.date}
            buttonText={project.buttonText}
          />
        ))}
      </div>
     )}

    </div>
  )}

export default HomePage