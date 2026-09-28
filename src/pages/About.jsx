import { useState } from 'react';
import './styles/aboutPage.css';

const AboutPage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-page">
      <div className="about-inner">
        <p className="about-label">About</p>

        <h2 className="about-statement">
          I'm <span className="about-highlight">Modesta,</span> a fullstack developer
          in Norway. My favourite project so far involved diving into psychology research papers and ADHD literature before
            writing a single line of code. Turns out understanding people is half the job.
        </h2>

        <div className="about-facts">
          <div>
            <p className="about-facts__label">Right now</p>
            <p className="about-facts__text">
              Looking for my first full-time developer role, in Norway or remote.
            </p>
          </div>

          <div>
            <p className="about-facts__label">Studied</p>
            <p className="about-facts__text">
              Bachelor's degree at NTNU, finished in 2026.
            </p>
          </div>

          <div>
            <p className="about-facts__label">Away from code</p>
            <p className="about-facts__text">
              Stand-up, mindfulness, hiking and a lot of nature.
            </p>
            <button
              className="about-more-btn"
              onClick={() => setShowMore(!showMore)}
              aria-expanded={showMore}
            >
              {showMore ? 'See less −' : 'See more +'}
            </button>
          </div>
        </div>

        {showMore && (
          <p className="about-extra">
            I finished my degree in web development at NTNU Gjøvik. I've built everything
            from scalable APIs to accessibility-focused front ends, usually under time
            pressure and while figuring things out along the way. My favourite project so
            far involved diving into psychology research papers and ADHD literature before
            writing a single line of code. Turns out understanding people is half the job.
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutPage;