import './styles/style.css';
import React from 'react';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Main from './pages/Main';
import Cart from './pages/Cart';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path='/details' component={Details}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/' exact component={Main}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
