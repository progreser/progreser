import { useEffect } from 'react';
import { BsPlus } from 'react-icons/bs';
import './Routine.scss';
import { MdAccessTime } from 'react-icons/md';
import { GiHistogram } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import Moment from 'react-moment';
import 'moment/locale/ko';

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

const today = new Date();
let hour = today.getHours();
const nowTime =
  hour > 6 && hour < 12
    ? '아침'
    : hour > 12 && hour < 18
    ? '오후'
    : hour > 18 && hour < 21
    ? '저녁'
    : '밤';

const messages = [
  `평온한 ${nowTime} 입니다  :)`,
  `어떤 ${nowTime}시간을 보내고 계신가요?`,
  '나른함을 깨워줄 음악을 들어보세요!',
  '루티너와 함께 일상을 변화시켜요!',
  '좋은 변화는 좋은 습관에서 시작해요!',
  '작은 좋은 습관이 큰 변화를 만듭니다.',
];

const randomItem = messages[Math.floor(Math.random() * messages.length)];
console.log(randomItem);

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
          <p>{randomItem}</p>
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
