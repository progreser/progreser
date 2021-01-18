<<<<<<< HEAD
export default function Routine() {
  return <div></div>;
}
=======
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
// const todos = [{id: 1, message: }];

const Lilist = () => {
  const [state, setState] = useState([
    { id: 1, message: '아침 루트', firsttime: '9:15am', lasttime: '9:16am' },
    { id: 2, message: '밥먹기', firsttime: '0:00am', lasttime: '' },
  ]);
  console.log(state);
  return state.map(todo => {
    return (
      <li className="Routine-list">
        {todo.message}
        <time>
          {todo.firsttime} {todo.lasttime && '~'} {todo.lasttime}
        </time>
        <button>
          <FiMoreHorizontal />
        </button>
      </li>
    );
  });
};

const Routine = () => {
  console.log(moment().format());

  return (
    <div className="Routine">
      <div className="header">
        <time>
          <Moment interval={1000} format="M.DD (dd) hh:mm A" />
        </time>
        <h1>평온한 오후입니다.</h1>
      </div>
      <ul className="section">
        <Lilist />
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
>>>>>>> e0f99dcbd352a82ff57fe030a80ac547ef1a03e7
