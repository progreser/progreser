import './App.css';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Routine from './components/Routine';
import Modify from './components/Modify';

import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, rootSaga } from './modules/root';
import LoginContainer from './containers/login';
import { ConnectedRouter } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/modify" component={Modify} />
          <Route path="/signup" component={Signup} />
          <Route path="/" exact component={Routine} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
