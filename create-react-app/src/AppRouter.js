import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import UseReducerPage from './pages/UseReducer'
import UseCallbackPage from './pages/UseCallback'
import MealReducer from './pages/MealReducer'
import UseMemoPage from './pages/UseMemo'
import UseLayoutEffectPage from './pages/UseLayoutEffect'
import UseStatePage from './pages/UseState'

import UserContext from './contexts/UserContext';

export default function AppRouter() {
  const [user, setUser] = React.useState({})

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/use-reducer'>useReducer</Link>
          </li>
          <li>
            <Link to='/use-callback'>useCallback</Link>
          </li>
          <li>
            <Link to='/meals-reducer'>Meals (Reducer)</Link>
          </li>
          <li>
            <Link to='/use-memo'>useMemo</Link>
          </li>
          <li>
            <Link to='/use-layout-effect'>useLayoutEffect</Link>
          </li>
          <li>
            <Link to='/use-state'>useState (custom hooks)</Link>
          </li>
        </ul>

        <hr />
        <UserContext.Provider value={[user, setUser]}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/use-reducer'>
              <UseReducerPage />
            </Route>
            <Route path='/use-callback'>
              <UseCallbackPage />
            </Route>
            <Route path='/meals-reducer'>
              <MealReducer />
            </Route>
            <Route path='/use-memo'>
              <UseMemoPage />
            </Route>
            <Route path='/use-layout-effect'>
              <UseLayoutEffectPage />
            </Route>
            <Route path='/use-state'>
              <UseStatePage />
            </Route>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}



