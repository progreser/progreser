import React from 'react';
import { useDispatch } from 'react-redux';

import Login from '../components/Login';
import { loginStart } from '../modules/user';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const onLogin = (id, pass) => dispatch(loginStart(id, pass));
  return <Login onLogin={onLogin} />;
};

export default LoginContainer;
