import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Panel from './components/Panel/Panel';
import Layout from './containers/Layout/Layout';

const CurrentWeather = React.lazy(() => {
  return import('./containers/CurrentWeather/CurrentWeatherContainer');
});

const LongTermWeather = React.lazy(() => {
  return import('./containers/LongTermWeather/LongTermWeatherContainer');
});

const SearchWeather = React.lazy(() => {
  return import('./containers/SearchWeather/SearchWeatherContainer');
});

const App = () => {
  const routes = (
    <Switch>
      <Route path='/current' component={CurrentWeather} />} />
      <Route path='/longterm' component={LongTermWeather} />
      <Route path='/search' component={SearchWeather} />
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
