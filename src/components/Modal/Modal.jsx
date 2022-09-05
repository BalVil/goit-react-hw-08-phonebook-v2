import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay } from './Modal.styled';
import ContactEditor from 'components/ContactEditor/ContactEditor';

const EditContactModal = ({ onClose, id }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ContactEditor id={id} onClose={onClose} />
    </Overlay>,
    document.querySelector('#modal-root')
  );
};
export default EditContactModal;

EditContactModal.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
