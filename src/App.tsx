import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { GlobalStyles } from './styles';
import { routes } from './routes';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          {/* General routes */}
          {routes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
          {/* Route for 404 error page */}
          <Route
            component={Error}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
