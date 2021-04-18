import { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { AddPerson } from '../components/AddPerson';

export const Routes = (): ReactElement => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/add-person'>
        <AddPerson />
      </Route>
    </Switch>
  );
};
