import React from 'react';
import Item from './item/Item';
import style from './list.module.css';

function List({list, setQuery, setQueryType}) {
  return (
    <div className={style.list} id={'list'}>
      {list.map(item => (
        <Item key={item.id} data={item} setQuery={setQuery} setQueryType={setQueryType}/>
      ))}
    </div>
  );
}

export default List;