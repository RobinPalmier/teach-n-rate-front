
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { roadMap } from './router';
import './assets/css/App.css';

const App = () => {
  return (
    <div className="App">
        { 
            roadMap.map((prop,key) => 
              prop.redirect
              ? <Redirect from={prop.path} to={prop.to} key={key}/>
              : <Route path={prop.path} component={prop.component} key={key}/>
            )
        }
    </div>
  );
}

export default App;