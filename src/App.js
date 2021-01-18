import './App.css';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD

import Login from './components/Login';
import Signup from './components/Signup';
import Routine from './components/Routine';
import Modify from './components/Modify';
=======
>>>>>>> e0f99dcbd352a82ff57fe030a80ac547ef1a03e7

import Login from './components/Login';
import Signup from './components/Signup';
import Routine from './components/Routine';
import Modify from './components/Modify';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
<<<<<<< HEAD
        <Route path="/signup" component={Signup} />
        <Route path="/modify" component={Modify} />
=======
        <Route path="/modify" component={Modify} />
        <Route path="/signup" component={Signup} />
>>>>>>> e0f99dcbd352a82ff57fe030a80ac547ef1a03e7
        <Route path="/" exact component={Routine} />
      </Switch>
    </div>
  );
}

export default App;
