import React, { useCallback, useEffect, useRef, useState } from 'react';
import './NewRoutine.scss';
import 'antd/dist/antd.css';
import { Form, Input, Checkbox, Switch, Select, TimePicker } from 'antd';
import { IoIosArrowRoundForward } from 'react-icons/io';
const { Option } = Select;

const NewRoutine = ({ onRoutine }) => {
  const form = useRef();
  const audio = useRef();

  const [alarm, setAlarm] = useState('');

  let message = '1번 울리기';
  const [state, setState] = useState(message);

  const format = 'HH:mm';

  const options = [
    { label: '일', value: '일' },
    { label: '월', value: '월' },
    { label: '화', value: '화' },
    { label: '수', value: '수' },
    { label: '목', value: '목' },
    { label: '금', value: '금' },
    { label: '토', value: '토' },
  ];

  const onAlarmChange = alarm => {
    setAlarm(alarm);
    audio.current.src = `./audio/${alarm}.mp3`;
    audio.current.play();
  };

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const formdata = new FormData(form.current);
      const routine = {};
      for (let [key, value] of formdata.entries()) {
        routine[key] = value;
      }
      console.log(routine);
      onRoutine(routine);
    },
    [onRoutine],
  );

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const bellChange = e => {};

  return (
    <div className="Modify">
      <h1>
        + New <br /> Routine
      </h1>
      <Form onFinish={onFinish} ref={form}>
        <Form.Item name="routine">
          <Input placeholder="새 루틴을 추가해주세요" />
        </Form.Item>
        <Form.Item name="day">
          <Checkbox.Group options={options} onChange={onChange} />
        </Form.Item>

        <h2>시작 알림</h2>
        <div className="theme">
          <div className="toggle">
            <div className="active">활성화</div>
            <Form.Item name="alram">
              <Switch onChange={onChange} />
            </Form.Item>
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
          <span>
            <Form.Item name="frequency">
              <Select defaultValue="1번 울리기">
                <Option value="1번 울리기">1번 울리기</Option>
                <Option value="1분단위로 3번 울리기">1분단위로 3번 울리기</Option>
                <Option value="5분 간격 3번 울리기">5분 간격 3번 울리기</Option>
              </Select>
            </Form.Item>
          </span>
        </div>
        <h2>타이머 종료 알림</h2>
        <div className="alarm">
          <Form.Item name="alarm">
            <Select defaultValue="알람 없음" onChange={onAlarmChange}>
              <Select value="none">알람 없음</Select>
              <Select value="bell">벨 소리</Select>
              <Select value="knock">노크 소리</Select>
            </Select>
          </Form.Item>
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
      <audio controls ref={audio} autoplay>
        <source src="" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default NewRoutine;
