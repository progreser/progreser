import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routine from '../components/Routine';
import { getStart } from '../modules/getRoutine';

const RoutineContainer = () => {
  const dispatch = useDispatch();
  const routines = useSelector(state => state.getRoutine);

  const getRoutine = () => dispatch(getStart());

  return <Routine routines={routines} getRoutine={getRoutine} />;
};

export default RoutineContainer;
