import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Routine from './components/Routine';
import Modify from './components/Modify';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/modify" component={Modify} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={Routine} />
      </Switch>
    </div>
  );
}

export default App;
