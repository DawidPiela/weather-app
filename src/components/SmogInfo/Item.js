import React from 'react';

const Item = props => (
  <li className='smog-info__list-item'>{props.name}: {props.value}</li>
)

export default Item;