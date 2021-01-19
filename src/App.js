import './App.css';
import { Route, Switch } from 'react-router-dom';
import Routine from './components/Routine';
import SignContainer from './containers/SignupContainer';
import NewRoutineContainer from './container/NewRoutineContair';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, rootSaga } from './modules/root';
import LoginContainer from './containers/LoginContainer';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
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
            <Route path="/signup" component={SignupContainer} />
            <Route path="/" exact component={Routine} />
          </Switch>
        </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default App;
