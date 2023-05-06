import ReactDOM from 'react-dom';
import './Modal.scss';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { BiErrorCircle } from 'react-icons/bi';

const Modal = function ({ success, message, onClose }) {
  return ReactDOM.createPortal(
    <section className={`modal`}>
      <div className={`left-bar ${success ? 'success' : ''}`}></div>

      <div className="modal-content">
        <div>
          {success ? (
            <IoIosCheckmarkCircleOutline className="success" />
          ) : (
            <BiErrorCircle className="failed" />
          )}

          <div className="modal-message">
            <p>{success ? 'Success' : 'Error'}</p>
            <p>{message}</p>
          </div>
        </div>

        <div onClick={onClose} className="close-div">
          <p>CLOSE</p>
        </div>
      </div>
    </section>,
    document.querySelector('.modal-container')
  );
};

export default Modal;
