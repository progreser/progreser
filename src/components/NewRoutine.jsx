import React, { useCallback, useRef } from 'react';
import './NewRoutine.scss';

const NewRoutine = ({ onRoutine }) => {
  const form = useRef();
  console.log(onRoutine);
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const formdata = new FormData(form.current);
      const routine = {};
      for (let [key, value] of formdata.entries()) {
        routine[key] = value;
      }
      onRoutine(routine);
    },
    [onRoutine],
  );

  return (
    <div className="Modify">
      <h1>
        + New <br /> Routine
      </h1>
      <form onSubmit={onSubmit} ref={form}>
        <input type="text" placeholder="루틴 이름 입력" name="routine" />
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
          <button className="button" type="reset">
            취소
          </button>
          <button className="button" type="submit">
            완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewRoutine;
