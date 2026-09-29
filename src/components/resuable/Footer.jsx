import { useState } from 'react';
import '../styles/Footer.css';

const EMAIL = 'trakselytemodesta@gmail.com';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch {
      window.location.href = `mailto:${EMAIL}`; 
    }
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer__top">
        <div>
          <h2 className="footer__heading">Let's work together.</h2>
          <p className="footer__text">
            Hiring a developer, or need one for a project? I reply within a couple of days.
          </p>
        </div>

        <div className="footer__contact">
          <a href={`mailto:${EMAIL}`} className="footer__email">{EMAIL}</a>
          <button className="footer__copy" onClick={copyEmail}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <nav className="footer__links" aria-label="Social links">
        <a href="https://github.com/modestat" target="_blank" rel="noopener noreferrer">GitHub</a>
        
        <a href="https://www.linkedin.com/in/modesta-trakselyte-a462402b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
};

export default Footer;