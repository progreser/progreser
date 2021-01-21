import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
};

export default Modal;
