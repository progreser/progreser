import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Routine from './components/Routine';
import Modify from './components/Modify';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';
import { rootReducer, rootSaga } from './modules/root';
import LoginContainer from './containers/login';

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
