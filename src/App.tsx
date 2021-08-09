import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { GlobalStyles } from './styles';
import { routes } from './routes';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          {routes.map((route) => (
            route.path
              ? (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ) : (
                <Route
                  exact={route.exact}
                  component={route.component}
                />
              )
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
