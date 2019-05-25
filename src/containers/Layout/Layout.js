import React from 'react';

import Navigation from '../../components/Navigation/Navigation';

const Layout = (props) => (
  <>
    <main>
      <Navigation />
      {props.children}
    </main>
  </>
)

export default Layout;