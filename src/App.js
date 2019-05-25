import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import LongTermWeather from './components/LongTermWeather/LongTermWeather';
import SearchWeather from './components/SearchWeather/SearchWeather';
import Panel from './components/Panel/Panel';
import Layout from './containers/Layout/Layout';

const App = () => {
  const routes = (

    <Switch>
      <Layout>
        <Route path='/current' component={CurrentWeather} />
        <Route path='/longterm' component={LongTermWeather} />
        <Route path='/search' component={SearchWeather} />
        <Route path='/' exact component={Panel} />
      </Layout>
    </Switch>

  );

  return (
    <div>
      {routes}
    </div>
  )

};

export default withRouter(App);
