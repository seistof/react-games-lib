import React, {useState} from 'react';
import logo from '../../logo.png';
import style from './nav.module.css';
import {Link, useHistory} from 'react-router-dom';

function Nav({setQuery, setQueryType}) {
  const [search, setSearch] = useState('');

  const handleSearchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchOnClick = (e) => {
    e.preventDefault();
    setQuery(search);
    setQueryType('search');
    setSearch('');
    history.push('/');
  };

  const handleLogoOnClick = () => {
    setQuery('');
    setQueryType('search');
  };

  const history = useHistory();

  return (
    <div className={style.nav}>
      <Link to={'/'}>
        <img
          onClick={handleLogoOnClick}
          className={style.logo}
          src={logo}
          alt="book"
        />
      </Link>
        <form className={style.form} onSubmit={handleSearchOnClick}>
          <input
            className={'search-input'}
            placeholder={'game title'}
            type="text"
            value={search}
            onChange={handleSearchOnChange}
          />
          <button type={'submit'}>Search</button>
        </form>
      <Link to={'/'}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Nav;
