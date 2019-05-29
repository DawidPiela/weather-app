import React from 'react';
import { Route, Switch } from 'react-router-dom';

const SearchWeather = React.lazy(() => {
  return import('../../containers/SearchWeather/SearchWeatherContainer');
});

const CurrentWeather = React.lazy(() => {
  return import('../../containers/CurrentWeather/CurrentWeatherContainer');
});

const LongTermWeather = React.lazy(() => {
  return import('../../containers/LongTermWeather/LongTermWeatherContainer');
});

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