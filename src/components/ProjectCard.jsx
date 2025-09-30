import './styles/ProjectCard.css';
/**
 * ProjectCard Component
 * 
 * Displays a clickable card for each project with an image, title, and button.
 * 
 * Props (data passed from parent HomePage component):
 * - props.project: The complete project object from projectsInfo.js containing all project data
 * - props.project.mainImage: The imported image file for the project thumbnail
 * - props.project.github: The GitHub repository URL -> comes from the project data in projectInfo.js
 * - props.title: The project's name/title
 * - props.buttonText: Text displayed on the button (usually "View Code")
 * - props.onProjectClick: Function from parent that opens the project detail panel
 * 
 * Clicking the card opens the project detail panel.
 * Clicking the button opens the GitHub repo in a new tab without triggering the card click.
 * 
 * Event Handling:
 * - e.stopPropagation(): Prevents the button click from "bubbling up" to the parent card div,
 *   which would otherwise trigger both the button's onClick AND the card's onClick
 * - window.open(url, '_blank'): Opens a URL in a new browser tab
 *   The '_blank' parameter is a browser instruction meaning "open in new tab/window"
 */
const ProjectCard = (props) => {
  const viewCodeBtn = (e) => {
    e.stopPropagation();
    window.open(props.project.github, '_blank');
  }
  return (
    // div + onclick to open slide-out panel
    <div className="project__card" onClick={() => props.onProjectClick(props.project)}> 
    {/*Shows whatever image is stored in props.project.mainImage in data.js*/}
          <img src={props.project.mainImage} alt={`screenshot of` } />
          <h2>{props.title}</h2>
          <button onClick={viewCodeBtn}>{props.buttonText}</button>
    </div>
  )
}

export default ProjectCard