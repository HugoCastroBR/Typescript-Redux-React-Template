import WelcomePage from 'pages/Welcome';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={WelcomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;