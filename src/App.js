import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GithubState from './context/github/GithubState';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

const App =()=> {
 
 
  const [alert,setAlert] = useState(null);


  const setAlertFunc = (msg, type) => {
    setAlert({msg,type});
    setTimeout(()=>setAlert(null),5000);
  };


    return (
      <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                     
                      setAlert={setAlertFunc}
                    />

                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                component={User}
              />
            </Switch>
          </div>
        </div>
      </Router>
      </GithubState>
    );
  }


export default App;
