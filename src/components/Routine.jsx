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

const Lilist = ({ routines }) => {
  // const [state, setState] = useState([
  //   { id: 1, message: '아침 루트', firsttime: '9:15am', lasttime: '9:16am' },
  //   { id: 2, message: '밥먹기', firsttime: '0:00am', lasttime: '' },
  // ]);

  // console.log(routines);
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
      <li className="Routine-list">
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

const Routine = ({ routines, getRoutine }) => {
  useEffect(() => {
    getRoutine();
  }, []);
  console.log(routines);
  return (
    <div className="Routine">
      <div className="header">
        <time>
          <Moment interval={1000} format="M.DD (dd) hh:mm A" />
        </time>
        <h1>평온한 오후입니다.</h1>
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
