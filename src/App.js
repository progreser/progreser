import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Routine from './components/Routine';
import NewRoutine from './components/NewRoutine';

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
