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
      navigate('/projects'); // Naviger til projects
    }
    setIsDragging(false);
  }

  return (
    <div className="landing-container">
      <section className="hero-section">
        <h1>Modesta Trakselyte</h1>
        <p>Fullstack web developer</p>
        <p>Slide to the right to view my work or get to know me better through about page!</p>
      </section>

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
              ? `translateX(${Math.min(Math.max(currentX - startX, 0), 200)}px)` 
              : undefined
          }}
        />
        <span className="slider-text right">Projects</span>
      </div>
    </div>
  );
}

export default LandingPage;