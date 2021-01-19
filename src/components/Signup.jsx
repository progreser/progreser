import React, { useCallback, useRef, useState } from 'react';
import userService from '../modules/services/AuthService';
import './Signup.scss';

export default function Signup({ onSign }) {
  const id = useRef();
  const pass = useRef();
  const name = useRef();

  const failid = useRef();

  const Submit = useCallback(
    e => {
      e.preventDefault();
      console.log();
      onSign(id.current.value, name.current.value, pass.current.value);
    },
    [onSign],
  );

  return (
    <div className="Signup">
      <h1>만나서 반가워요!</h1>
      <p>알찬 하루를 보낼 준비가 됐나요?</p>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="user-id" ref={failid}>
            이메일
          </label>
          <input type="email" required name="user-id" ref={id} />
        </div>
        <div>
          <label htmlFor="user-pass">비밀번호</label>
          <input type="password" required name="user-pass" ref={pass} />
        </div>
        <div>
          <label htmlFor="user-repass">비밀번호</label>
          <input type="password" required name="user-repass" />
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
          <input type="checkbox" />
          <span>마이루틴의 이용약관과 개인정 취급방식에 동의합니다.</span>
        </div>
        <button type="submit">하루 관리 시작하기</button>
      </form>
    </div>
  );
}
