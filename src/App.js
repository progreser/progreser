import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Routine from './components/Routine';
<<<<<<< HEAD
=======
import NewRoutine from './components/NewRoutine';

>>>>>>> 933a2b3974f5d5443cf7a514a7ac5cfd47ec07b9
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, rootSaga } from './modules/root';
<<<<<<< HEAD
import LoginContainer from './containers/Login';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import SignContainer from './containers/Sign';
import NewRoutine from './components/NewRoutine';
=======
import LoginContainer from './containers/LoginContainer';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import SignContainer from './containers/SignContainer';
import NewRoutineContainer from './containers/NewRoutineContainer';

>>>>>>> 933a2b3974f5d5443cf7a514a7ac5cfd47ec07b9
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
<<<<<<< HEAD
            <Route path="/newroutine" component={NewRoutine} />
=======
            <Route path="/newroutine" component={NewRoutineContainer} />
>>>>>>> 933a2b3974f5d5443cf7a514a7ac5cfd47ec07b9
            <Route path="/signup" component={SignContainer} />
            <Route path="/" exact component={Routine} />
          </Switch>
        </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default App;
