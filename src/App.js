import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Loader from './Components/Loader';
import NotFound from './Components/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
         <div className="App">
            <BrowserRouter>
              <div>
                  <Switch>
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/loading" component={Loader} exact={true} />
                            <Route
                              path="/dashboard"
                              render={props =>
                                sessionStorage.getItem("token") !== null ? <Dashboard /> : <Redirect to="/" />
                              }
                             exact={true}
                            />
                    <Route component={NotFound} />
                  </Switch>
              </div>
            </BrowserRouter>
          </div>
    );
  }
}

export default App;
