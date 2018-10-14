import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import RecordDetails from './components/records/RecordDetails.jsx'
import SignIn from './components/auth/SignIn.jsx'
import SignUp from './components/auth/SignUp.jsx'
import CreateRecord from './components/records/CreateRecord.jsx'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/record/:id' component={RecordDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateRecord} />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
