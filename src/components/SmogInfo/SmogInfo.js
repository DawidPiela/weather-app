import React from 'react';

import Item from './Item';

const SmogInfo = props => {
  const data = props.data;
  
  return (
    <div className='smog-info'>
      <ul className='smog-info__list'>
        {Object.values(data.current.values).slice(0, 3).map((element) => (
          <Item key={element.name} name={element.name} value={element.value} />
        ))}
      </ul>
    </div>
  )
}

export default SmogInfo;