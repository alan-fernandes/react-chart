import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Page1} path="/" exact />
      <Route component={Page2} path="/page2" />
    </BrowserRouter>
  );
}

export default Routes;