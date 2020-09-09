import React from 'react';
import style from './item.module.css';
import metacritic from './metacritic.png';
import {Link} from 'react-router-dom';
import uuid from 'uuid/dist/v4';

function Item({data, setQuery, setQueryType}) {

  const handleTagOnClick = (e) => {
    setQueryType('tags');
    setQuery(e.target.textContent.replace('#', ''));
  };

  const handleGenreOnClick = (e) => {
    setQueryType('genres');
    setQuery(e.target.getAttribute('slug'));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.item} id={'item'}>
        <div className={style.top}>
          <div className={style.left}>
            <p className={style.title}>{data.name}</p>
            {
              data.genres.length !== 0
                ? <p className={style.genre}>{data.genres.map(genre => (<span slug={genre.slug} key={uuid()} onClick={handleGenreOnClick}>{`${genre.name}`}<br/></span>))}</p>
                : <p className={style.genre}>No genre data</p>
            }
            {
              data.metacritic !== null
                ? <p className={style.rating}><img src={metacritic} alt="metacritic"/>{`${data.metacritic}/100`}</p>
                : <p className={style.rating}>No rating data</p>
            }
            <Link to={`/${data.id}`} className={style.details}>
              <button>Details</button>
            </Link>
          </div>
          <div className={style.right}>
            <img src={data.background_image} alt="game art"/>
          </div>
        </div>
        {
          data.parent_platforms
            ? data.parent_platforms.length !== 0
              ? <p className={style.platform}>{data.parent_platforms.map(platform => `${platform.platform.name}`).join(', ')}</p>
              : <p className={style.platform}>No platform data</p>
            : <p className={style.platform}>No platform data</p>
        }
        <p className={style.tags}>
          {data.tags.map(tag => (
            <span key={uuid()} onClick={handleTagOnClick}>{`#${tag.slug} `}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Item;
