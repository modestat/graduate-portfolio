import './styles/ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={src} alt={alt} className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
