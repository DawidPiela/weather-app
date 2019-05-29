import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Panel from './components/Panel/Panel';
import Layout from './containers/Layout/Layout';

const CurrentWeather = React.lazy(() => {
  return import('./containers/CurrentWeather/CurrentWeatherContainer');
});

const LongTermWeather = React.lazy(() => {
  return import('./components/LongTermWeather/LongTermWeather');
});

const SearchWeather = React.lazy(() => {
  return import('./components/SearchWeather/SearchWeather');
});

const App = () => {
  const routes = (
    <Switch>
      <Route path='/current' component={CurrentWeather} />} />
      <Route path='/longterm' render={props => <LongTermWeather {...props} />} />
      <Route path='/search' render={props => <SearchWeather {...props} />} />
      <Route path='/' exact component={Panel} />
    </Switch>
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  )

};

export default withRouter(App);
