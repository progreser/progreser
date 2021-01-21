import React, { useCallback, useRef, useState } from 'react';
import MyModal from '../ModalPortal/MyModal/MyModal';
import userService from '../modules/services/AuthService';
import './Signup.scss';

export default function Signup({ onSign }) {
  const id = useRef();
  const pass = useRef();
  const repass = useRef();
  const name = useRef();
  const failid = useRef();
  const formData = useRef();
  const [checked, setChecked] = useState(false);
  const [passState, setPass] = useState('');
  const Submit = useCallback(
    e => {
      e.preventDefault();
      const obj = {};
      const formData = new FormData(e.target);
      for (let [key, value] of formData.entries()) {
        obj[key] = value;
      }
      console.log(obj);
      onSign(obj);
    },
    [onSign],
  );
  const click = async e => {
    e.preventDefault();
    console.log(id.current.value);
    const userId = await userService.getUser(id.current.value);

    if (userId.length) {
      console.log('중복');
      setChecked(true);
    } else {
      setChecked(false);
    }
    console.log(checked);
  };
  const passChange = () => {
    if (pass.current.value === repass.current.value) {
      setPass(false);
    } else {
      setPass(true);
    }
    console.log(passState);
  };

  return (
    <div className="Signup">
      <h1>만나서 반가워요!</h1>
      <p>알찬 하루를 보낼 준비가 됐나요?</p>
      <form onSubmit={Submit} ref={formData}>
        <div>
          <label htmlFor="user-id" ref={failid}>
            이메일
          </label>
          <input type="email" required name="user-id" ref={id} />
          <button onClick={click}>중복 확인</button>
        </div>
        <div>
          <label htmlFor="user-pass">비밀번호</label>
          <input type="password" required name="user-pass" ref={pass} />
        </div>
        <div>
          <label htmlFor="user-repass">비밀번호</label>
          <input type="password" required name="user-repass" onChange={passChange} ref={repass} />
          {passState && '비밀번호가 다릅니다.'}
        </div>
        <div>
          <label htmlFor="user-name">이름</label>
          <input type="text" required name="user-name" ref={name} />
        </div>
        <div>
          <label>성별</label>
          <ul className="gender-list">
            <li>남</li>
            <li>녀</li>
          </ul>
        </div>
        <div>
          <label htmlFor="user-birth">생년월일</label>
          <input type="text" required name="user-birth" />
        </div>
        <div class="check-div">
          <input type="checkbox" name="user-ok" />
          <span>마이루틴의 이용약관과 개인정 취급방식에 동의합니다.</span>
        </div>
        <button type="submit">하루 관리 시작하기</button>
      </form>
    </div>
  );
}
