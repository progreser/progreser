import { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import './Routine.scss';
import { MdAccessTime } from 'react-icons/md';
import { GiHistogram } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import Moment from 'react-moment';
import 'moment/locale/ko';

import moment from 'moment';
import { useSelector } from 'react-redux';

const Lilist = ({ routines }) => {

  const today = new Date();
  const boldDay = today.getDay(); // 4

  const allDays = [
    { id: 0, day: '일' },
    { id: 1, day: '월' },
    { id: 2, day: '화' },
    { id: 3, day: '수' },
    { id: 4, day: '목' },
    { id: 5, day: '금' },
    { id: 6, day: '토' },
  ];
  const checkDay = allDays.filter(today => today.id === boldDay);

  const StyleDay = ({ days }) => {
    return days.map(day => {
      return checkDay[0].day === day ? (
        <span style={{ color: 'black' }}>{day}</span>
      ) : (
        <span>{day}</span>
      );
    });
  };

  return routines.map(routine => {
    return (
      <li className="Routine-list" key={routine.id}>
        {routine.routine}
        <time style={{ fontWeight: 'bold' }}>
          {routine.startTime} ~ {routine.endTime} <StyleDay days={routine.day} />
        </time>
        <button>
          <FiMoreHorizontal />
        </button>
      </li>
    );
  });
};

const Routine = ({ routines, getRoutine, onLogout, history }) => {
  useEffect(() => {
    getRoutine();
  }, []);
  console.log(history);

  const logout = () => {
    onLogout();
    localStorage.removeItem('token');
  };

  return (
    <div className="Routine">
      <div className="header">
        <time>
          <Moment interval={1000} format="M.DD (dd) hh:mm A" />
        </time>
        <h1>
          평온한 <Moment interval={1000} format="A" />
          입니다.
        </h1>
        <div className="logoutbtn">
          <button onClick={logout}>로그아웃</button>
        </div>
      </div>
      <ul className="section">
        <Lilist routines={routines} />
      </ul>
      <div className="plus">
        <button>
          <BsPlus />
        </button>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <button>
              <MdAccessTime />
            </button>
          </li>
          <li>
            <button>
              <GiHistogram />
            </button>
          </li>
          <li>
            <button>
              <BsFillPersonFill />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Routine;
