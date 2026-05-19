import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles/home.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleDragStart = (event) => {
    setIsDragging(true);
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    setStartX(x);
  }

  const handleDragMove = (event) => {
    if (!isDragging) return;
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    setCurrentX(x);
  }

  const handleDragEnd = () => {
    const distance = currentX - startX;
    if (distance > 50) {
      navigate('/projects'); 
    }
    setIsDragging(false);
  }

  return (
    <div className="landing-container">
 
      {/* Vertikal bleed tekst — kun desktop */}
      <div className="bleed-text" aria-hidden="true">MODESTA</div>
 
      <div className="hero-content">
        <p className="hero-greeting">hello, my name is</p>
 
        <h1 className="hero-name">
          <span className="hero-name--first">Modesta</span>
          <span className="hero-name--last">Trakselyte</span>
        </h1>
 
        <div className="hero-underline" />
 
        <p className="hero-sub">Fullstack Developer</p>
 
        <div className='ipad-slider'
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="inside__slider-circle"
            style={{
              transform: isDragging
                ? `translateX(${Math.min(Math.max(currentX - startX, 0), 280)}px)`
                : undefined
            }}
          />
          <span className="slider-text right">Enter Portfolio </span>
        </div>
      </div>
 
    </div>
  );
}
export default LandingPage;