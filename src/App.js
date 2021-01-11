import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/siginin" component={Signin} />
      <Route path="/" exact component={Routine} />
    </Switch>
  );
}

export default App;
