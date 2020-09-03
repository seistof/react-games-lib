import React from 'react';
import style from './item.module.css';
import metacritic from './metacritic.png';
import {Link} from 'react-router-dom';
import uuid from 'uuid/dist/v4';

function Item({data}) {

  return (
    <Link to={`/${data.id}`} className={style.wrapper} game={data}>
      <div className={style.item}>
        <div className={style.top}>
          <div className={style.left}>
            <p className={style.title}>{data.name}</p>
            <p>{data.genres.map(genre => (genre.name)).join(', ')}</p>
            <p className={style.rating}><img src={metacritic} alt="metacritic"/>{data.metacritic}</p>
          </div>
          <div className={style.right}>
            <img src={data.background_image} alt=""/>
          </div>
        </div>
        <p>Platform: <span className={style.platform}>{data.parent_platforms.map(
          platform => `${platform.platform.name}`).join(', ')}</span>
        </p>
        <p className={style.tags}>Tags: <span>{data.tags.map(tag => `#${tag.name} `)}</span>
        </p>
      </div>
    </Link>
  );
}

export default Item;