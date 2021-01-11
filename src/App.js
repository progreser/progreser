import './App.css';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Routin from './components/Routine';
import Modify from './components/Modify';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/modify" component={Modify} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={Routin} />
      </Switch>
    </div>
  );
}

export default App;
