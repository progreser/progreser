import React from 'react';
import { useDispatch } from 'react-redux';
import Signup from '../components/Signup';
import { signupStart } from '../modules/userSign';

const SignupContainer = () => {
  const dispatch = useDispatch();
  const onSign = (id, name, pass) => dispatch(signupStart(id, name, pass));
  return <Signup onSign={onSign} />;
};

export default SignupContainer;
