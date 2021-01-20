import React, { useCallback, useRef, useState } from 'react';
import './NewRoutine.scss';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import { Menu, Dropdown, Button, Input, Select, Checkbox, Form } from 'antd';
const { Option } = Select;

const NewRoutine = ({ onRoutine }) => {
  const options = [
    { label: '일', value: '일' },
    { label: '월', value: '월' },
    { label: '화', value: '화' },
    { label: '수', value: '수' },
    { label: '목', value: '목' },
    { label: '금', value: '금' },
    { label: '토', value: '토' },
  ];

  // const onFinish = useCallback(
  //   e => {
  //     e.preventDefault();
  //     const formdata = new FormData(form.current);
  //     const routine = {};
  //     for (let [key, value] of formdata.entries()) {
  //       routine[key] = value;
  //     }
  //     onRoutine(routine);
  //   },
  //   [onRoutine],
  // );
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="Modify">
      <h1>
        + New <br /> Routine
      </h1>
      {/* <form onSubmit={onSubmit} ref={form}> */}
      <Form name="validate_other" onFinish={onFinish}>
        <Form.Item name="routine">
          <Input type="text" placeholder="루틴 이름 입력" name="routine" />
        </Form.Item>
        <Form.Item name="select">
          <Checkbox.Group options={options} />
        </Form.Item>
        <h2>시작 알림</h2>
        <div className="theme">
          <div className="toggle">
            <div className="active">활성화</div>
            <Form.Item name="alram">
              <Switch defaultChecked checkedChildren onChange={onChange} />
            </Form.Item>
          </div>
        </div>
        <div className="theme">
          <div className="time">시간</div> <span>0:00</span>
        </div>
        <div className="theme">
          <div className="frequency">빈도</div>
          <span>
            <Form.Item name="name-sele">
              <Select placeholder="Please select a country">
                <Option value="1번 울리기">1번 울리기</Option>
                <Option value="1분단위로 3번 울리기">1분단위로 3번 울리기</Option>
                <Option value="5분 간격 3번 울리기">5분 간격 3번 울리기</Option>
              </Select>
            </Form.Item>
          </span>
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
      </Form>
    </div>
  );
};

export default NewRoutine;
