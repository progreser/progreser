import React, { useState } from 'react';
import Modalloaders from './components/Modalloaders';
import './MyModal.scss';

const MyModal = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(false);
  return (
    <div className="modal">
      <div>
        <Modalloaders />
        <button>닫기</button>
      </div>
    </div>
  );
};

export default MyModal;
