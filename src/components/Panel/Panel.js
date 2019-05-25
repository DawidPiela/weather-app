import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import LongTermWeather from '../LongTermWeather/LongTermWeather';
import SearchWeather from '../SearchWeather/SearchWeather';

const Panel = () => (
  <>
    <div>
      <Switch>
        <Route path='/search' component={SearchWeather} />
        <Route path='/current' component={CurrentWeather} />
        <Route path='/longterm' component={LongTermWeather} />
      </Switch>
    </div>
  </>
);

export default Panel;