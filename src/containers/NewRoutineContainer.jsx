import React from 'react';
import { useDispatch } from 'react-redux';
import NewRoutine from '../components/NewRoutine';
import { newStart } from '../modules/newRoutine';

const NewRoutineContainer = () => {
  const dispatch = useDispatch();
  const onNewRoutine = routine => dispatch(newStart(routine));

  return <NewRoutine onNewRoutine={onNewRoutine} />;
};

export default NewRoutineContainer;
