import profile from "../assets/profile.jpg";
import './styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="outer__parent--box">
      <p>I'm in my third year of Web Development studies at NTNU Gjøvik, 
        where I've built a comprehensive skill set spanning both frontend and 
        backend development. From creating responsive user interfaces with React to managing databases and deploying applications, 
        I've gained hands-on experience with the full web development stack.
        </p>
        <p>
        I believe in maintaining a healthy work-life balance. When I'm not coding, you'll find me exploring nature on long walks, 
        staying active at the gym, or experimenting with new recipes in the kitchen. I love staying connected with friends through social 
        events and always make time for self-care.
        </p>
        <img className="profile-image" src={profile} alt="" />
    </div>
  )
}

export default AboutPage