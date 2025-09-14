// individual project pages
/* when starting on this page:
1. need to fetch the project data based on the slug from the URL 0> figure out which project the user clicked (from the url)
2. display the project data on the page => find that projects data
3. MAYBE add a back button to go back to the projects page
*/
import {useParams} from 'react-router-dom';
import {projects} from '../data/projectsInfo';

const ProjectDetail = () => {
    const {slug} = useParams();

    const project = projects.find(proj => proj.slug === slug); // Goes through each project and finds the one where project.slug matches our URL slug thats why we need to find the slug from the useParams (URL) to knwo what name it is to then find it in the data array
    // find the project and return to me the projecst slug that matches the slug from the URL
    console.log(slug);

    
  return (
    <div className='project-detail'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>Date: {project.date}</p>
    </div>
  )
}

export default ProjectDetail