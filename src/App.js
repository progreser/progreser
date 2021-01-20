import './App.css';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Routine from './components/Routine';
import SignContainer from './containers/SignupContainer';
import NewRoutineContainer from './containers/NewRoutineContainer';
=======

import Routine from './components/Routine';

>>>>>>> 6d367f135a772dd5e717ee9d056d7dbbf6870305
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, rootSaga } from './modules/root';
import LoginContainer from './containers/LoginContainer';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import SignContainer from './containers/SignContainer';
import NewRoutineContainer from './containers/NewRoutineContainer';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/NewRoutine" component={NewRoutineContainer} />
            <Route path="/signup" component={SignContainer} />
            <Route path="/" exact component={Routine} />
          </Switch>
        </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default App;
