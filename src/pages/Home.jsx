import './styles/home.css';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsInfo';
import {useState} from 'react';
/**
 * 
 * TODO: style better clean in code (maybe move the drag functions to a custom hook)
 * For Desktop (Mouse):

onMouseDown - User presses mouse button on slider
onMouseMove - User drags while holding button
onMouseUp - User releases mouse button

For Mobile (Touch):

onTouchStart - User touches slider
onTouchMove - User drags finger
onTouchEnd - User lifts finger
 */
const HomePage = () => {
  // If showWork is false: show landing with slider
  // If showWork is true: show projects
  const [showWork, setShowWork] = useState(false); //initial state: work is not being shown yet because logic is false
  const [selectedProject, setSelectedProject] = useState(null); //initial state: no project is selected

  const [isDragging, setIsDragging] = useState(false); // tracks if draaging is happening
  const [startX, setStartX] = useState(0);            // stores where user started 
  const [currentX, setCurrentX] = useState(0);

  const [imageNumber, setImageNumber] = useState(0); // state to track which image is being shown in the project detail view from array in the data.js

  const toggleSlider = () => {
    setShowWork(!showWork); //basically the the onclick event is triggered it calles the toggelSLider funciton and since the initialze value of the showing part is false it shows the hero seciton, but since inside the funciton we have spezidied that it need to not be false aka true when the funciton is triggered it shows the content of the projects
    //maybe redirect to the work page? 
  }
 // this funciton saves which project was saved
  const openProjectDetail = (project) => { // arrow funciton that takes different projects as arguments and waits until user lcikcs on it, once clicked it will show the 2/3 view width informaiton about that specific project
    setSelectedProject(project);
  }

  //Remember that dragging has started
 // Remember where they started (the X position)
 // function when user starts dragging
  const handleDragStart = (event) =>{ //event is putted as param, event tell you about the click
    setIsDragging(true);
     // For mouse: event.clientX
  // For touch: event.touches[0].clientX
  const x = event.touches ? event.touches[0].clientX : event.clientX;
  setStartX(x); //clientX is the X position of the mouse when the event happened
  }

  const handleDragMove = (event) => { // function when user is dragging
    if (!isDragging) return; // if not dragging do nothing
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    setCurrentX(x); // update current X position
  }

  const handleDragEnd = () => { // function when user stops dragging
    //1. calculate distance
    //2. check if they drag more than 100px to the rights
    //3. if yes, show work
    //4. reset dragging state 
    const distance = currentX - startX;
    if (distance > 50) { // changed distance from 100 to 50 becasue it was too much for mobile
      setShowWork(true);
    } 
    setIsDragging(false); // nto putting this is else because it always need to stop dragging, no matter what
  }

  // functions for caorusel to go back and forth between images
  // need an funciton that takes event as param because i will be looking for click form client
  // condiitons as length -1 for last index so user stops at last iamge
  // and condition: index = 0 so perosn stays on first image if wanting to go back
  // to detemrine how many images i have in my data.js i need .length property to determine that
  const goToNextImage = (event) => {
    if (imageNumber < selectedProject.images.length - 1) {
      setImageNumber(imageNumber + 1); // if not at last image, then go forward"
    }
     // If AT last image, stay put (or loop to first)
  }

  const goToPrevious = (event) => {
    // If NOT at first image, go to previous  
    // index 0,1,2
    // if (2 > 0) => go to prev
    // if index 0 => 0 > 0 then stay since the condition becomes falsy
    if (imageNumber > 0) {
      setImageNumber(imageNumber - 1);
    }
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

       <div className='ipad-slider'
         onMouseDown={handleDragStart}
         onMouseMove={handleDragMove}
         onMouseUp={handleDragEnd}
         onMouseLeave={handleDragEnd} // in case user drags the circle to the end of the slider and then leaves the slider area without releasing the mouse button, so that the work projects can be shown
         onTouchStart={handleDragStart}
         onTouchMove={handleDragMove}
         onTouchEnd={handleDragEnd}
         >
        <div className={`inside__slider-circle ${showWork ? 'moved' : ''}`}
               style={{ 
                transform: isDragging 
                  ? `translateX(${Math.min(Math.max(currentX - startX, 0), 200)}px)` 
                  : undefined
              }} >
             </div>
             <span className="slider-text right">Projects</span>
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
            project={project} //passing the whole project object as a prop to the ProjectCard component so that when user clicks on it we have access to all the data of that specific project
            onProjectClick={openProjectDetail} //the prop "onPorjectClick" that comes from the child; You're giving each ProjectCard access to your openProjectDetail function by calling it onProjectClick
          />
        ))}
      </div>
      {/* Conditionally render the selected project details if a project is selected  -> to know which orojetc is selected the funciton called openPorjectDetail stores that information*/}
      {selectedProject && (
        <>
        <div className="project-detail--out">
          <h2>{selectedProject.title}</h2>
          {/*selecte the useStatevairbale attach to it data name from data.js and render with && operater; only show if it exists */}
          {selectedProject.overview &&(
            <p className="project-overview">{selectedProject.overview}</p>
          )}
          {selectedProject.myRole && (
            <p className="project-myrole">My Role: {selectedProject.myRole}</p>
          )}
          <p>{selectedProject.description}</p>
          <p className="project-date"> {selectedProject.date}</p>
          <p className="project-tech">Technologies: {selectedProject.technologies}</p>

          {/*chck if data exist; data = selectedProject.images */}
          {selectedProject.images && (
            <div className="project-images--gallery">
              <div className='carousel-buttons'>
                 <button onClick={goToPrevious}>&lt;</button>
                 <button onClick={goToNextImage}>&gt;</button>
               </div>
              <div className="project-image-item">
                  <img src={selectedProject.images[imageNumber].src} />
                   <p className="caption">{selectedProject.images[imageNumber].caption}</p>
              </div>
            </div>
          )}

          <p>{selectedProject.longDescription}</p>
          <button className="close-project-detail" onClick={() => setSelectedProject(null)}>X</button> 
        </div>
        </>
      )}
      </>
     )}

    </div>
  )
        }

export default HomePage

