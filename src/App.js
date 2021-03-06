import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Error from './pages/Error'
import Login from './pages/Login'
import Main from './pages/Main'


function App() {
  return (
   <Router>
     <Switch>
     <Route path='/' exact={true}>
         <Main/>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       <Route path="*">
         <Error/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
