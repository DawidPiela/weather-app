import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {CurrentWeatherContainer} from '../../containers/CurrentWeather/CurrentWeatherContainer';
import LongTermWeather from '../LongTermWeather/LongTermWeather';
import SearchWeather from '../SearchWeather/SearchWeather';

// import CurrentWeather from '../../containers/CurrentWeather/CurrentWeatherContainer';

// const CurrentWeatherContainer = React.lazy(() => {
//   return import('../../containers/CurrentWeather/CurrentWeatherContainer')
// })

const Panel = () => (
  <>
    <div>
      {/* <CurrentWeatherContainer /> */}
      <Switch>
        <Route path='/search' component={SearchWeather} />
        <Route path='/current' component={CurrentWeatherContainer} />
        {/* <Route path='/current' render={props => <CurrentWeatherContainer {...props} />} /> */}
        <Route path='/longterm' component={LongTermWeather} />
      </Switch>
    </div>
  </>
);

export default Panel;