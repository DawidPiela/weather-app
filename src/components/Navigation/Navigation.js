import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to='/search'>Search for the weather</NavLink>
      </li>
      <li>
        <NavLink to='/current'>Current weather forecast</NavLink>
      </li>
      <li>
        <NavLink to='/longterm'>Long Term weather forecast</NavLink>
      </li>
    </ul>
  </nav>
);

export default navigation;