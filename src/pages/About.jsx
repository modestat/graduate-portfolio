import profileOfModesta from "../assets/profileOfModesta.jpg";
import "./styles/aboutPage.css";

const AboutPage = () => {
  return (
    <section className="about-page">

      <h1 className="about-title">About me</h1>
       <div className="about-layout">
        <div className="about-text">
          <div className="about-block">
            <h3>Modesta Trakselyte</h3>
            <p>
            I'm a fullstack web developer finishing my degree at NTNU Gjøvik. I've built everything from scalable APIs to accessibility-focused front ends, 
            usually under time pressure and while figuring things out along the way. 
            My favourite project so far involved diving into psychology research papers and ADHD literature before writing a single line of code. 
            Turns out understanding people is half the job.
            </p>
          </div>
        </div>

        <div className="about-image">
          <img src={profileOfModesta} alt="Modesta Trakselyte" />
        </div>

      </div>

    </section>
  );
};

export default AboutPage;