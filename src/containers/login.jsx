import React from 'react';
import { useDispatch } from 'react-redux';
import { loginStart } from '../modules/user';
import Login from '../components/Login';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const onLogin = (id, pass) => dispatch(loginStart(id, pass));

  return <Login onLogin={onLogin} />;
};

export default LoginContainer;
