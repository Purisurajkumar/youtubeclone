import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Find from '../Fatch';
import Playlist from '../Component/Playbox'
function New(){
  return(
        <Router>
    <Switch>
        <Route path='/' exact component={Find}/>
        <Route path='/:id'  component={Playlist}/> 
    </Switch>
    </Router>
  )}
export default New 