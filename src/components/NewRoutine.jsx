import React, { useCallback, useRef, useState } from 'react';
import './NewRoutine.scss';
import 'antd/dist/antd.css';
import {
  Menu,
  Dropdown,
  TimePicker,
  Input,
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';
import moment from 'moment';
const { Option } = Select;

const format = 'HH:mm';

const NewRoutine = ({ onRoutine }) => {
  const form = useRef();
  const menuBtn = useRef();
  let message = '1번 울리기';
  const [state, setState] = useState(message);

  const options = [
    { label: '일', value: '일' },
    { label: '월', value: '월' },
    { label: '화', value: '화' },
    { label: '수', value: '수' },
    { label: '목', value: '목' },
    { label: '금', value: '금' },
    { label: '토', value: '토' },
  ];

  const onFinish = value => {
    console.log(value);
  };

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
    <div className="NewRoutine">
      <h1>
        + New <br /> Routine
      </h1>
      <Form onFinish={onFinish} ref={form}>
        <input type="text" placeholder="루틴 이름 입력" name="routine" />
        <Form.Item name="Day">
          <Checkbox.Group options={options} onChange={onChange} />
        </Form.Item>
        <h2>시작 알림</h2>
        <div className="theme">
          <div className="toggle">
            <div className="active">활성화</div>
            <Form.Item name="Active">
              <Switch defaultChecked onChange={onChange} />
            </Form.Item>
          </div>
        </div>
        <div className="theme">
          <div className="time">시간</div>
          <span>
            <Form.Item name="First-Time">
              <TimePicker defaultValue={moment('12:08', format)} format={format} />
            </Form.Item>
            <Form.Item name="Last-Time">
              <TimePicker defaultValue={moment('12:08', format)} format={format} />
            </Form.Item>
          </span>
        </div>
        <div className="theme">
          <div className="frequency">빈도</div>
          <span>
            <Form.Item name="Drop">
              <Select defaultValue="1번 울리기">
                <Select value="1번 울리기">1번 울리기</Select>
                <Select value="1분단위로 3번 울리기">1분단위로 3번 울리기</Select>
                <Select value="5분 간격 3번 울리기">5분 간격 3번 울리기</Select>
              </Select>
            </Form.Item>
          </span>
        </div>
        <h2>타이머 종료 알림</h2>
        <div className="theme">
          <Form.Item name="bell">
            <Select defaultValue="1번 울리기">
              <Select value="1번 울리기">1번 울리기</Select>
              <Select value="1분단위로 3번 울리기">1분단위로 3번 울리기</Select>
              <Select value="5분 간격 3번 울리기">5분 간격 3번 울리기</Select>
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
    </div>
  );
};

export default NewRoutine;
