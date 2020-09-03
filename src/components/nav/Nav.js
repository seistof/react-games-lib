import React, {useState} from 'react';
import logo from '../../logo.png';
import style from './nav.module.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Nav({setQuery}) {
  const [search, setSearch] = useState('');

  const handleSearchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchOnClick = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const handleLogoOnClick = () => {
    setQuery('');
  };

  return (
    <div className={style.nav}>
      <Link to={'/'}>
        <img  className={style.logo} src={logo} alt="book"/>
      </Link>
      <form>
        <input type="text" value={search} onChange={handleSearchOnChange}/>
        {console.log(search)}
        <button onClick={handleSearchOnClick}>Search</button>
      </form>
      <button>Back</button>
    </div>
  );
}

export default Nav;
