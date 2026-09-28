import './styles/home.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-content">
        <div className="hero-meta">
          <div className="hero-meta__left">
            <p>Fullstack developer</p>
            <p>Norway</p>
          </div>
          <p className="hero-meta__status">
            <span className="status-dot"></span>
            Open to work
          </p>
        </div>

        <h1 className="hero-name">
          <span className="hero-name--first">Modesta</span>
          <span className="hero-name--last">Trakselyte</span>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;