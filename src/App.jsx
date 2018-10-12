import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import ItemDetails from './components/Items/ItemDetails.jsx'
import SignIn from './components/auth/SignIn.jsx'
import SignUp from './components/auth/SignUp.jsx'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/item/:id' component={ItemDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
