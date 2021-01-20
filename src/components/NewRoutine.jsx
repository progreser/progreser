import React, { useCallback, useRef } from 'react';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import './NewRoutine.scss';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const NewRoutine = ({ onRoutine }) => {
  const form = useRef();

  const options = [
    { label: '일', value: '일' },
    { label: '월', value: '월' },
    { label: '화', value: '화' },
    { label: '수', value: '수' },
    { label: '목', value: '목' },
    { label: '금', value: '금' },
    { label: '토', value: '토' },
  ];

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

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
        <Checkbox.Group options={options} onChange={onChange} />
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
          <div className="time"></div>
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
