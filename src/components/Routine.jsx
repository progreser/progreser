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
  return routines.map(routine => {
    return (
      <li className="Routine-list">
        {routine.routine}
        <time>
          {routine.startTime} ~ {routine.endTime} {routine.day}
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
        <h1>
          평온한 <Moment interval={1000} format="A" /> 입니다.
        </h1>
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
