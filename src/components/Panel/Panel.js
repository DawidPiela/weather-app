import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LongTermWeather from '../LongTermWeather/LongTermWeather';
import SearchWeather from '../SearchWeather/SearchWeather';

const CurrentWeather = React.lazy(() => {
  return import('../../containers/CurrentWeather/CurrentWeatherContainer');
});

const Panel = () => (
  <>
    <div>
      {/* <CurrentWeatherContainer /> */}
      <Switch>
        <Route path='/search' component={SearchWeather} />
        <Route path='/current' component={CurrentWeather} />
        {/* <Route path='/current' render={props => <CurrentWeatherContainer {...props} />} /> */}
        <Route path='/longterm' component={LongTermWeather} />
      </Switch>
    </div>
  </>
);

export default Panel;