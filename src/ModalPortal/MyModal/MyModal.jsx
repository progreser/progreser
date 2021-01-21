import React, { useState } from 'react';
import Modalloaders from './components/Modalloaders';
import './MyModal.scss';

const MyModal = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(false);
  return (
    <div className="modal">
      <div>
        <div>{loading && <Modalloaders />}</div>
        {state || <p>이메일이 중복 되었습니다.</p>}
        <button>닫기</button>
      </div>
    </div>
  );
};

export default MyModal;
