import profileOfModesta from "../assets/profileOfModesta.jpg";
import './styles/aboutPage.css';

const AboutPage = () => {
  return (
    <div className="outer__parent--box"> 
         <div className="header-with-avatar">
            <img className="avatar-small" src={profileOfModesta} alt="profile image of Modesta Trakselyte" />
              <h1>About me</h1>
            </div>
              <p>I'm in my final year of Web Development studies at NTNU Gjøvik, where I've specialized in JavaScript development across both frontend (React) and backend (Node.js, Express). Throughout my studies, I've gained hands-on experience with databases (SQL and MongoDB), deployment processes, and CI/CD workflows.</p>
              <p>As project leader for StudyPlatform, a research management platform built by a team of four, I coordinated deadlines and development while contributing to both frontend and backend implementation. I've also worked on API design and cloud deployment through projects like a Twitter clone using Python and PostgreSQL, and implemented authentication systems for web applications.</p>
              <p>I thrive in collaborative environments where I can learn from different perspectives and contribute my own ideas. When facing technical challenges, I approach them systematically - consulting documentation, discussing with peers, and leveraging modern development tools to find solutions.</p>
              <p>Outside of coding, I maintain balance through an active lifestyle including training and pilates, social connections with friends, and exploring new experiences and creative activities. I'm naturally curious and enjoy learning new skills that broaden my perspective.</p>
             <p>After graduation, I'm excited to join innovative technology companies where I can further develop my fullstack expertise. I've discovered that I enjoy taking on coordination roles within teams and would like to grow into positions where I can contribute to both technical development and project leadership.</p>    
            </div>
  )
}
export default AboutPage;