import React from 'react';
import './NewRoutine.scss';
import { useRef, useCallback } from 'react';
import 'antd/dist/antd.css';
import { Form, Switch, TimePicker } from 'antd';
import moment from 'moment';
import { IoIosArrowRoundForward } from 'react-icons/io';

const NewRoutine = ({ onRoutine }) => {
  const form = useRef();

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const formdata = new FormData(form.current);
      const routine = {};
      for (let [key, value] of formdata.entries()) {
        routine[key] = value;
      }
      onRoutine(routine);
      console.log(onRoutine(routine));
    },
    [onRoutine],
  );

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  const format = 'HH:mm';

  const onFinish = values => {
    console.log(values);
  };

  return (
    <div className="NewRoutine">
      <h1>
        + New <br /> Routine
      </h1>
      <Form onFinish={onFinish} ref={form}>
        <Form.Item>
          <input type="text" placeholder="루틴 이름 입력" name="routine" />
        </Form.Item>
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
          <div className="time">시간</div>
          <Form.Item name="startTime">
            <TimePicker placeholder="Start Time" format={format} />
          </Form.Item>
          <IoIosArrowRoundForward />
          <Form.Item name="endTime">
            <TimePicker placeholder="End Time" format={format} />
          </Form.Item>
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
      </Form>
    </div>
  );
};

export default NewRoutine;
