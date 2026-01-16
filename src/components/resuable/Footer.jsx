import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='fixed-footer'>
        <footer className="footer-content">
            <div className="footer__col-1">
             <p>Contact info</p>
             <a href='mailto:traksleytemodesta@gmail.com'>trakselytemodesta@gmail.com</a>
            </div>
            
            <div className='footer__col-2'>
                <a 
                href="https://www.linkedin.com/in/modesta-traksleyte-a462402b0/" 
                target="_blank" 
                rel="noopener noreferrer"
                >LinkedIn 
                 </a>
            </div>
        </footer>
    </div>
  )
}

export default Footer