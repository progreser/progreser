import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routine from '../components/Routine';
import { getStart } from '../modules/getRoutine';

const RoutineContainer = () => {
  const dispatch = useDispatch();

  const getRoutine = () => dispatch(getStart());
  const routines = useSelector(state => state.getRoutine);
  return <Routine routines={routines} getRoutine={getRoutine} />;
};

export default RoutineContainer;
