import profileOfModesta from "../assets/profileOfModesta.jpg";
import "./styles/aboutPage.css";

const AboutPage = () => {
  return (
    <section className="about-page">

      <h1 className="about-title">About me</h1>

      <div className="about-layout">

        <div className="about-text">

          <div className="about-block">
            <h3>Background</h3>
            <p>
              I'm in my final year of Web Development studies at NTNU Gjøvik,
              specializing in JavaScript across both frontend (React) and backend (Node.js, Express).
            </p>
          </div>

          <div className="about-block">
            <h3>Experience</h3>
            <p>
              As project leader for StudyPlatform, I coordinated a team of four
              while contributing across the full stack, including API design
              and cloud deployment.
            </p>
          </div>

          <div className="about-block">
            <h3>How I Work</h3>
            <p>
              I approach technical challenges methodically — breaking problems
              into manageable parts, consulting documentation, and collaborating
              when needed.
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