import { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [hov, setHov] = useState(false);

  return (
    <div className="fixed-footer">

      <svg viewBox="0 0 1200 40" className="footer-curve" preserveAspectRatio="none">
        <path d="M0,0 Q600,60 1200,0 L1200,40 L0,40 Z" fill="#1a1a1a" />
      </svg>

      <footer
        className={`footer-inner ${hov ? 'footer-inner--light' : ''}`}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <div className="footer-content">

          <div className="footer__col-1">
            <p className={`footer-label ${hov ? 'footer-label--light' : ''}`}>
              ÅPEN FOR SPENNENDE PROSJEKTER
            </p>
            <h2 className={`footer-heading ${hov ? 'footer-heading--light' : ''}`}>
              La oss lage noe sammen.
            </h2>
            <div className="footer-links">
              <button className={`footer-email-btn ${hov ? 'footer-email-btn--light' : ''} `} >
                trakselytemodesta@gmail.com
              </button>
              <a
                href="https://www.linkedin.com/in/modesta-traksleyte-a462402b0/"
                target="_blank"
                rel="noopener noreferrer"
                className={`footer-linkedin ${hov ? 'footer-linkedin--light' : ''}`}
              >
                LinkedIn 
              </a>
            </div>
          </div>

          <div className="footer__col-2">
            <div className="footer-dot"></div>
            <p className={`footer-copy ${hov ? 'footer-copy--light' : ''}`}>
              2026<br />
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Footer;