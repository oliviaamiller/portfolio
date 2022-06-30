import { Route, Switch } from 'react-router-dom';
import Art from './views/Art';
import Design from './views/Design';
import About from './views/About';
import Dev from './views/Dev';
import Home from './views/Home';
import Nav from './components/Nav';
import './App.css';

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/illustration">
          <Art />
        </Route>
        <Route exact path="/surface-design">
          <Design />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/dev">
          <Dev />
        </Route>
      </Switch>
    </>
  );
}
