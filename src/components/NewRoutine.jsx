import React from 'react';
import './NewRoutine.scss';

const NewRoutine = () => {
  return (
    <div className="NewRoutine">
      <h1>
        + New <br /> Routine
      </h1>
      <input type="text" placeholder="루틴 이름 입력" />
      <ul>
        <li>일</li>
        <li>월</li>
        <li>화</li>
        <li>수</li>
        <li>목</li>
        <li>금</li>
        <li>토</li>
      </ul>
      <h2>시작 알림</h2>
      <div className="theme">
        <div className="toggle">
          <div className="active">활성화</div>
          <div className="box"></div>
        </div>
      </div>
      <div className="theme">
        <div className="time">시간</div> <span>0:00</span>
      </div>
      <div className="theme">
        <div className="frequency">빈도</div>
        <span>한번 울리기</span>
      </div>
      <h2>타이머 종료 알림</h2>
      <div className="theme">
        <div className="time">알림음</div> <span>기본</span>
      </div>
      <div className="button-wrap">
        <button className="button">취소</button>
        <button className="button">완료</button>
      </div>
    </div>
  );
};

export default NewRoutine;
