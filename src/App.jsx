import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Contacto from './components/Contacto';
import Footers from './components/Footers';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import QuienesSomos from './components/QuienesSomos';
import Servicios from './components/Servicios';
import Panel from './components/Panel'

function App() {
  return (
  <div>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Inicio></Inicio>
          </Route>
          <Route path="/servicios">
            <Servicios></Servicios>
          </Route>
          <Route path="/quienes">
            <QuienesSomos></QuienesSomos>
          </Route>
          <Route path="/contacto">
            <Contacto></Contacto>
          </Route>
        </Switch>
      </div>
    </Router>
    <div>
      <Footers></Footers>
    </div>
    </div>
  );
}

export default App;
