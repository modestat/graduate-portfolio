import { useState } from 'react';
import './styles/aboutPage.css';
import { aboutTiles } from '../data/aboutTilles.js';

// Which grid row a tile is in (desktop, 8 columns)
const getRow = (index) => {
  if (index < 16) {
    return Math.floor(index / 8) + 1;      // rows 1 and 2: 8 tiles each
  }
  return Math.floor((index - 16) / 3) + 3; // rows 3 and 4: 3 tiles each, next to the intro
};

// Which row the panel goes in on mobile (4 columns, intro on top)
const getMobileRow = (index) => {
  return Math.floor(index / 4) + 3;        // the row just under the clicked tile
};

const AboutPage = () => {
  const [activeTile, setActiveTile] = useState(null);
  const activeIndex = aboutTiles.indexOf(activeTile);

  return (
    <section className="about-page">
      <div className="about-inner">
        <div className={`about-grid ${activeTile ? 'about-grid--dimmed' : ''}`}>

          <div className="about-intro">
            <p className="about-label">About me</p>
            <h2 className="about-statement">
              I'm <span className="about-highlight">Modesta,</span> a fullstack developer
              in Norway. My favourite project so far involved diving into psychology research
              papers and ADHD literature before writing a single line of code. Turns out
              understanding people is half the job.
            </h2>
            <ul className="about-legend">
              <li><span className="about-legend__swatch about-legend__swatch--work"></span>How I work</li>
              <li><span className="about-legend__swatch about-legend__swatch--outside"></span>Outside work</li>
            </ul>
          </div>

          {aboutTiles.map((item) =>
            item.type === 'photo' ? (
              <div key={item.id} className="about-tile about-tile--photo">
                <img src={item.image} alt={item.alt} />
              </div>
            ) : (
              <button
                key={item.id}
                className={`about-tile about-tile--text about-tile--${item.category}`}
                onClick={() => setActiveTile(item)}
                aria-expanded={activeTile === item}
              >
                {item.title}
              </button>
            )
          )}

          {activeTile && (
            <div
              className={`about-panel about-panel--${activeTile.category}`}
              style={{
                '--panel-row': getRow(activeIndex),
                '--panel-row-mobile': getMobileRow(activeIndex),
              }}
            >
              <h3 className="about-panel__title">{activeTile.title}</h3>
              <p className="about-panel__body">{activeTile.body}</p>
              <button
                className="about-panel__close"
                onClick={() => setActiveTile(null)}
                aria-label="Close panel"
              >
                ×
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default AboutPage;