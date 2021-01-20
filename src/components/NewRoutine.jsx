import React, { useCallback, useRef, useState } from 'react';
import './NewRoutine.scss';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import { Menu, Dropdown, Button } from 'antd';

const NewRoutine = ({ onRoutine }) => {
  const form = useRef();
  const menuBtn = useRef();
  let message = '';
  const [state, setState] = useState(message);
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
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  const click = e => {
    console.log(e.item.props.value);
    setState(e.item.props.value);
    console.log(state);
  };
  const menu = (
    <Menu onClick={click}>
      <Menu.Item value="1번 울리기">
        <button ref={menuBtn} className="menu-btn">
          1번 울리기
        </button>
      </Menu.Item>
      <Menu.Item value="1분단위로 3번 울리기">
        <button className="menu-btn" value="1분단위로 3번 울리기">
          1분단위로 3번 울리기
        </button>
      </Menu.Item>
      <Menu.Item value="5분 간격 3번 울리기">
        <button value="5분 간격 3번 울리기" className="menu-btn">
          5분 간격 3번 울리기
        </button>
      </Menu.Item>
    </Menu>
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
            <Switch defaultChecked onChange={onChange} />
          </div>
        </div>
        <div className="theme">
          <div className="time">시간</div> <span>0:00</span>
        </div>
        <div className="theme">
          <div className="frequency">빈도</div>
          <span>
            <Dropdown overlay={menu} placement="bottomLeft">
              <Button>{state}</Button>
            </Dropdown>
          </span>
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
