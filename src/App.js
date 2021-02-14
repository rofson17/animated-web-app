import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/Service' component={Service}/>
        <Redirect to="/" />
      </Switch>

    </>
  );
}

export default App;
