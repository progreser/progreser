import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NewRoutine from '../components/NewRoutine';
import { newStart } from '../modules/newRoutine';

const NewRoutineContainer = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  if (token === null) {
    return <Redirect to="/login" />;
  }
  const onRoutine = (id, name, pass) => dispatch(newStart(id, name, pass));
  return <NewRoutine onRoutine={onRoutine} />;
};

export default NewRoutineContainer;
