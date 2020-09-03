import React from 'react';
import Item from './item/Item';
import style from './list.module.css';
import uuid from 'uuid/dist/v4';

function List({list}) {
  console.log(list);
  return (
    <div className={style.list}>
      {list.map(item => (
        <Item key={item.id} data={item}/>
      ))}
    </div>
  );
}

export default List;