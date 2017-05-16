import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/signin" component={SessionFormContainer} />
  </div>
);

export default App;
